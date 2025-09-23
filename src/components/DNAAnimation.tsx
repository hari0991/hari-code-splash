import { useEffect, useRef } from 'react';

const DNAAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // DNA Animation variables
    let animationId: number;
    let time = 0;

    // DNA structure parameters
    const helixRadius = 80;
    const helixHeight = canvas.height;
    const helixSpeed = 0.02;
    const particleCount = 60;
    
    // Create DNA particles
    class DNAParticle {
      constructor(
        public index: number,
        public strand: 'left' | 'right'
      ) {}

      draw(ctx: CanvasRenderingContext2D, time: number) {
        const progress = (this.index / particleCount) * Math.PI * 8;
        const yOffset = (this.index / particleCount) * helixHeight;
        
        // Calculate helix positions
        const angle = progress + time * helixSpeed;
        const x = canvas.width / 2 + Math.cos(angle) * helixRadius * (this.strand === 'left' ? 1 : -1);
        const y = yOffset + Math.sin(time * 0.5) * 20;
        
        // Color gradient based on position
        const hue = (this.index / particleCount) * 360 + time * 20;
        const alpha = 0.6 + Math.sin(time + this.index) * 0.3;
        
        // Draw particle
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = `hsl(${hue}, 70%, 60%)`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = `hsl(${hue}, 70%, 60%)`;
        
        ctx.beginPath();
        ctx.arc(x, y % helixHeight, 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw connecting lines between strands
        if (this.strand === 'left') {
          const rightX = canvas.width / 2 + Math.cos(angle) * helixRadius * -1;
          ctx.strokeStyle = `hsl(${hue}, 50%, 40%)`;
          ctx.lineWidth = 1;
          ctx.globalAlpha = alpha * 0.5;
          ctx.beginPath();
          ctx.moveTo(x, y % helixHeight);
          ctx.lineTo(rightX, y % helixHeight);
          ctx.stroke();
        }
        
        ctx.restore();
      }
    }

    // Create particles
    const particles: DNAParticle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new DNAParticle(i, 'left'));
      particles.push(new DNAParticle(i, 'right'));
    }

    // Floating particles
    class FloatingParticle {
      constructor(
        public x: number = Math.random() * canvas.width,
        public y: number = Math.random() * canvas.height,
        public vx: number = (Math.random() - 0.5) * 0.5,
        public vy: number = (Math.random() - 0.5) * 0.5,
        public size: number = Math.random() * 2 + 1,
        public hue: number = Math.random() * 360
      ) {}

      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw(ctx: CanvasRenderingContext2D, time: number) {
        const alpha = 0.3 + Math.sin(time * 0.005 + this.x * 0.01) * 0.2;
        
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = `hsl(${this.hue + time * 0.5}, 60%, 70%)`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `hsl(${this.hue + time * 0.5}, 60%, 70%)`;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Create floating particles
    const floatingParticles: FloatingParticle[] = [];
    for (let i = 0; i < 30; i++) {
      floatingParticles.push(new FloatingParticle());
    }

    // Animation loop
    const animate = () => {
      time++;
      
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(10, 10, 15, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw DNA helix
      particles.forEach(particle => {
        particle.draw(ctx, time);
      });
      
      // Draw floating particles
      floatingParticles.forEach(particle => {
        particle.update();
        particle.draw(ctx, time);
      });
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-30"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default DNAAnimation;