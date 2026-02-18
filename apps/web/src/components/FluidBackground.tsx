'use client';

import { useEffect, useRef } from 'react';

/* ------------------------------------------------------------------ */
/*  Simplex-style 2D noise (compact, self-contained)                  */
/* ------------------------------------------------------------------ */
function createNoise() {
  const perm = new Uint8Array(512);
  const grad = [
    [1, 1],
    [-1, 1],
    [1, -1],
    [-1, -1],
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  for (let i = 0; i < 256; i++) perm[i] = i;
  for (let i = 255; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [perm[i], perm[j]] = [perm[j]!, perm[i]!];
  }
  for (let i = 0; i < 256; i++) perm[i + 256] = perm[i]!;

  return function noise2D(x: number, y: number): number {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    const xf = x - Math.floor(x);
    const yf = y - Math.floor(y);
    const u = xf * xf * (3 - 2 * xf);
    const v = yf * yf * (3 - 2 * yf);
    const g00 = grad[perm[X + perm[Y]!]! % 8]!;
    const g10 = grad[perm[X + 1 + perm[Y]!]! % 8]!;
    const g01 = grad[perm[X + perm[Y + 1]!]! % 8]!;
    const g11 = grad[perm[X + 1 + perm[Y + 1]!]! % 8]!;
    const n00 = g00[0]! * xf + g00[1]! * yf;
    const n10 = g10[0]! * (xf - 1) + g10[1]! * yf;
    const n01 = g01[0]! * xf + g01[1]! * (yf - 1);
    const n11 = g11[0]! * (xf - 1) + g11[1]! * (yf - 1);
    return (n00 * (1 - u) + n10 * u) * (1 - v) + (n01 * (1 - u) + n11 * u) * v;
  };
}

/* ------------------------------------------------------------------ */
/*  Types                                                             */
/* ------------------------------------------------------------------ */
interface FluidBlob {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  hue: number;
  sat: number;
  light: number;
  phase: number;
  speed: number;
}

interface Glitter {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  twinkleSpeed: number;
  twinklePhase: number;
  hue: number;
  brightness: number;
  life: number;
  maxLife: number;
}

/* ------------------------------------------------------------------ */
/*  Color palette: deep space, electric blues, teals, purples, golds  */
/* ------------------------------------------------------------------ */
const PALETTE = [
  { hue: 200, sat: 100, light: 55 }, // electric blue
  { hue: 260, sat: 80, light: 50 }, // purple
  { hue: 180, sat: 90, light: 45 }, // teal
  { hue: 220, sat: 95, light: 60 }, // bright blue
  { hue: 300, sat: 70, light: 45 }, // magenta
  { hue: 35, sat: 100, light: 55 }, // gold
  { hue: 170, sat: 85, light: 50 }, // cyan-green
  { hue: 280, sat: 75, light: 55 }, // violet
];

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */
export function FluidBackground({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const noise = createNoise();
    let width = 0;
    let height = 0;
    let time = 0;
    const blobs: FluidBlob[] = [];
    const glitters: Glitter[] = [];
    const mouse = { x: -9999, y: -9999 };

    function resize() {
      const dpr = Math.min(window.devicePixelRatio, 2);
      const rect = canvas!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      initBlobs();
    }

    function initBlobs() {
      blobs.length = 0;
      const count = 10 + Math.floor(width / 200);
      for (let i = 0; i < count; i++) {
        const pal = PALETTE[i % PALETTE.length]!;
        blobs.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: 80 + Math.random() * 200,
          hue: pal.hue + (Math.random() - 0.5) * 20,
          sat: pal.sat,
          light: pal.light,
          phase: Math.random() * Math.PI * 2,
          speed: 0.1 + Math.random() * 0.3,
        });
      }
    }

    function spawnGlitters(count: number) {
      for (let i = 0; i < count; i++) {
        if (glitters.length > 600) return;
        const pal = PALETTE[Math.floor(Math.random() * PALETTE.length)]!;
        const isGold = Math.random() < 0.15;
        glitters.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3 - 0.1,
          size: 0.5 + Math.random() * 2.5,
          twinkleSpeed: 3 + Math.random() * 8,
          twinklePhase: Math.random() * Math.PI * 2,
          hue: isGold ? 40 + Math.random() * 15 : pal.hue + (Math.random() - 0.5) * 30,
          brightness: isGold ? 80 : 60 + Math.random() * 30,
          life: 0,
          maxLife: 150 + Math.random() * 350,
        });
      }
    }

    function handleMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }

    /* -------------------------------------------------------------- */
    /*  Render loop                                                   */
    /* -------------------------------------------------------------- */
    function animate() {
      const dt = 0.016;
      time += dt;

      /* Dark space base */
      ctx!.fillStyle = '#030308';
      ctx!.fillRect(0, 0, width, height);

      /* ------- Fluid oil blobs (additive blending) ------- */
      ctx!.globalCompositeOperation = 'screen';

      for (const b of blobs) {
        const nx = noise(b.x * 0.001 + time * 0.08 + b.phase, b.y * 0.001) * 0.6;
        const ny = noise(b.x * 0.001, b.y * 0.001 + time * 0.08 + b.phase) * 0.6;
        b.vx += nx * b.speed * dt;
        b.vy += ny * b.speed * dt;
        b.vx *= 0.995;
        b.vy *= 0.995;

        // mouse attraction
        const mdx = mouse.x - b.x;
        const mdy = mouse.y - b.y;
        const md = Math.sqrt(mdx * mdx + mdy * mdy);
        if (md < 400 && md > 1) {
          b.vx += (mdx / md) * 0.05;
          b.vy += (mdy / md) * 0.05;
        }

        b.x += b.vx;
        b.y += b.vy;

        // wrap around
        if (b.x < -b.radius) b.x = width + b.radius;
        if (b.x > width + b.radius) b.x = -b.radius;
        if (b.y < -b.radius) b.y = height + b.radius;
        if (b.y > height + b.radius) b.y = -b.radius;

        const pulse = 1 + Math.sin(time * 0.5 + b.phase) * 0.15;
        const r = b.radius * pulse;
        const alpha = 0.12 + Math.sin(time * 0.3 + b.phase * 2) * 0.04;

        const grad = ctx!.createRadialGradient(b.x, b.y, 0, b.x, b.y, r);
        grad.addColorStop(0, `hsla(${b.hue}, ${b.sat}%, ${b.light}%, ${alpha * 1.2})`);
        grad.addColorStop(0.3, `hsla(${b.hue}, ${b.sat - 10}%, ${b.light - 10}%, ${alpha * 0.7})`);
        grad.addColorStop(
          0.6,
          `hsla(${b.hue + 15}, ${b.sat - 20}%, ${b.light - 20}%, ${alpha * 0.3})`,
        );
        grad.addColorStop(1, 'hsla(0, 0%, 0%, 0)');
        ctx!.fillStyle = grad;
        ctx!.fillRect(b.x - r, b.y - r, r * 2, r * 2);
      }

      /* ------- Oil film iridescence layer ------- */
      for (let i = 0; i < 3; i++) {
        const ox = width * 0.3 + Math.sin(time * 0.15 + i * 2) * width * 0.35;
        const oy = height * 0.4 + Math.cos(time * 0.12 + i * 1.5) * height * 0.35;
        const or2 = 150 + Math.sin(time * 0.2 + i) * 50;
        const hShift = (time * 8 + i * 120) % 360;
        const iGrad = ctx!.createRadialGradient(ox, oy, 0, ox, oy, or2);
        iGrad.addColorStop(0, `hsla(${hShift}, 90%, 60%, 0.06)`);
        iGrad.addColorStop(0.5, `hsla(${(hShift + 60) % 360}, 80%, 50%, 0.03)`);
        iGrad.addColorStop(1, 'hsla(0, 0%, 0%, 0)');
        ctx!.fillStyle = iGrad;
        ctx!.fillRect(ox - or2, oy - or2, or2 * 2, or2 * 2);
      }

      ctx!.globalCompositeOperation = 'source-over';

      /* ------- Glitter particles ------- */
      spawnGlitters(Math.ceil(3 + width / 400));

      for (let i = glitters.length - 1; i >= 0; i--) {
        const g = glitters[i]!;
        g.life++;

        // Fade envelope
        let fade: number;
        const lr = g.life / g.maxLife;
        if (lr < 0.1) fade = lr / 0.1;
        else if (lr > 0.75) fade = 1 - (lr - 0.75) / 0.25;
        else fade = 1;

        if (g.life >= g.maxLife) {
          glitters.splice(i, 1);
          continue;
        }

        // Fluid drift via noise field
        const gnx = noise(g.x * 0.003 + time * 0.1, g.y * 0.003);
        const gny = noise(g.x * 0.003, g.y * 0.003 + time * 0.1);
        g.vx += gnx * 0.015;
        g.vy += gny * 0.015;
        g.vx *= 0.98;
        g.vy *= 0.98;
        g.x += g.vx;
        g.y += g.vy;

        // Mouse push
        const gdx = g.x - mouse.x;
        const gdy = g.y - mouse.y;
        const gd = Math.sqrt(gdx * gdx + gdy * gdy);
        if (gd < 120 && gd > 0) {
          const f = ((120 - gd) / 120) * 0.4;
          g.vx += (gdx / gd) * f;
          g.vy += (gdy / gd) * f;
        }

        // Twinkle: sharp sparkle
        const twinkle = Math.pow(Math.max(0, Math.sin(time * g.twinkleSpeed + g.twinklePhase)), 8);
        const alpha = fade * (0.15 + twinkle * 0.85);

        if (alpha < 0.01) continue;

        // Draw glitter with cross-star shape for larger ones
        const s = g.size * (1 + twinkle * 0.5);

        if (s > 1.5 && twinkle > 0.3) {
          // Star burst for bigger sparkles
          ctx!.save();
          ctx!.translate(g.x, g.y);
          ctx!.globalCompositeOperation = 'lighter';

          // Glow
          const sg = ctx!.createRadialGradient(0, 0, 0, 0, 0, s * 6);
          sg.addColorStop(0, `hsla(${g.hue}, 80%, ${g.brightness}%, ${alpha * 0.4})`);
          sg.addColorStop(0.5, `hsla(${g.hue}, 70%, ${g.brightness - 10}%, ${alpha * 0.1})`);
          sg.addColorStop(1, 'hsla(0, 0%, 0%, 0)');
          ctx!.fillStyle = sg;
          ctx!.fillRect(-s * 6, -s * 6, s * 12, s * 12);

          // Cross spikes
          ctx!.strokeStyle = `hsla(${g.hue}, 60%, ${g.brightness + 10}%, ${alpha * 0.6})`;
          ctx!.lineWidth = 0.5;
          const spikeLen = s * 3 * twinkle;
          ctx!.beginPath();
          ctx!.moveTo(-spikeLen, 0);
          ctx!.lineTo(spikeLen, 0);
          ctx!.moveTo(0, -spikeLen);
          ctx!.lineTo(0, spikeLen);
          ctx!.stroke();

          // Core dot
          ctx!.beginPath();
          ctx!.arc(0, 0, s * 0.4, 0, Math.PI * 2);
          ctx!.fillStyle = `hsla(${g.hue}, 40%, 95%, ${alpha})`;
          ctx!.fill();

          ctx!.restore();
        } else {
          // Simple dot for small glitters
          ctx!.globalCompositeOperation = 'lighter';
          ctx!.beginPath();
          ctx!.arc(g.x, g.y, s * 0.5, 0, Math.PI * 2);
          ctx!.fillStyle = `hsla(${g.hue}, 80%, ${g.brightness}%, ${alpha * 0.8})`;
          ctx!.fill();
          ctx!.globalCompositeOperation = 'source-over';
        }
      }

      ctx!.globalCompositeOperation = 'source-over';

      /* ------- Subtle nebula fog overlay ------- */
      const fogX = width * 0.5 + Math.sin(time * 0.07) * width * 0.2;
      const fogY = height * 0.5 + Math.cos(time * 0.05) * height * 0.2;
      const fogR = Math.max(width, height) * 0.6;
      const fog = ctx!.createRadialGradient(fogX, fogY, 0, fogX, fogY, fogR);
      fog.addColorStop(0, 'rgba(10, 5, 30, 0.03)');
      fog.addColorStop(0.5, 'rgba(5, 10, 25, 0.02)');
      fog.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx!.fillStyle = fog;
      ctx!.fillRect(0, 0, width, height);

      /* ------- Vignette ------- */
      const vig = ctx!.createRadialGradient(
        width / 2,
        height / 2,
        width * 0.25,
        width / 2,
        height / 2,
        width * 0.75,
      );
      vig.addColorStop(0, 'rgba(0, 0, 0, 0)');
      vig.addColorStop(1, 'rgba(3, 3, 8, 0.4)');
      ctx!.fillStyle = vig;
      ctx!.fillRect(0, 0, width, height);

      animRef.current = requestAnimationFrame(animate);
    }

    resize();
    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', handleMouseMove);
    animRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ pointerEvents: 'auto' }}
    />
  );
}
