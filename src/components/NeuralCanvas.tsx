import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
}

export const NeuralCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Create particles based on dimensions
    const particleCount = Math.min(Math.floor((width * height) / 11000), 45);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1.2,
        baseAlpha: Math.random() * 0.5 + 0.3
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const connectionDistance = 120;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw particles & mouse connection
      particles.forEach((p) => {
        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Bounce on boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Proximity to mouse
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const mouseDist = Math.sqrt(dx * dx + dy * dy);
        if (mouseDist < 100) {
          const force = (1 - mouseDist / 100) * 0.04;
          p.x += dx * force;
          p.y += dy * force;
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(129, 140, 248, ${p.baseAlpha})`;
        ctx.shadowColor = '#38bdf8';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden pointer-events-auto">
      <canvas
        ref={canvasRef}
        className="w-full h-full absolute inset-0 block cursor-crosshair opacity-80"
        aria-hidden="true"
      />
      {/* Central stylized abstract AI core glyph */}
      <div className="relative z-10 pointer-events-none p-6 md:p-8 rounded-full border border-cyan-500/20 bg-slate-950/60 backdrop-blur-sm shadow-[0_0_50px_-10px_rgba(56,189,248,0.2)]">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-indigo-500/30 flex items-center justify-center animate-[spin_30s_linear_infinite]">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-dashed border-cyan-400/50 flex items-center justify-center animate-[spin_15s_linear_infinite_reverse]">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500 shadow-lg shadow-cyan-500/50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
