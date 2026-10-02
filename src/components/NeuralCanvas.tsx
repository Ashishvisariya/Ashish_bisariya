import { useEffect, useRef } from "react";

export default function NeuralCanvas() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const cols = 5;
      const rows = 5;
      const nodes: { x: number; y: number; r: number }[] = [];
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const x = 55 + c * ((rect.width - 110) / (cols - 1));
          const y = 50 + r * ((rect.height - 100) / (rows - 1)) + Math.sin(frame * 0.015 + c + r) * 5;
          nodes.push({ x, y, r: c === 2 ? 4.8 : 3.2 });
        }
      }

      ctx.lineWidth = 0.7;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          if (Math.abs(a.x - b.x) < 170) {
            const alpha = 0.1 + 0.08 * Math.sin(frame * 0.02 + i);
            ctx.strokeStyle = `rgba(95, 210, 255, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      nodes.forEach((n, i) => {
        const pulse = 0.75 + 0.25 * Math.sin(frame * 0.035 + i);
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 20);
        g.addColorStop(0, `rgba(99, 102, 241, ${0.35 * pulse})`);
        g.addColorStop(1, "rgba(99,102,241,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 20, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = i % 3 === 0 ? "#67e8f9" : "#a78bfa";
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      });

      frame++;
      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className="h-full w-full" aria-hidden="true" />;
}
