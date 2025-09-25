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

    // Detect theme
    const isDarkMode = () => document.documentElement.classList.contains('dark');

    // Animation variables
    let animationId: number;
    let time = 0;

    // Geometric particles
    class GeometricParticle {
      constructor(
        public x: number = Math.random() * canvas.width,
        public y: number = Math.random() * canvas.height,
        public vx: number = (Math.random() - 0.5) * 0.3,
        public vy: number = (Math.random() - 0.5) * 0.3,
        public size: number = Math.random() * 3 + 1,
        public rotation: number = Math.random() * Math.PI * 2,
        public rotationSpeed: number = (Math.random() - 0.5) * 0.02
      ) {}

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.rotationSpeed;
        
        // Wrap around screen
        if (this.x < -50) this.x = canvas.width + 50;
        if (this.x > canvas.width + 50) this.x = -50;
        if (this.y < -50) this.y = canvas.height + 50;
        if (this.y > canvas.height + 50) this.y = -50;
      }

      draw(ctx: CanvasRenderingContext2D, time: number) {
        const dark = isDarkMode();
        const alpha = 0.1 + Math.sin(time * 0.01 + this.x * 0.001) * 0.05;
        
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        // Theme-aware colors
        if (dark) {
          ctx.strokeStyle = `hsl(217, 91%, 60%)`;
        } else {
          ctx.strokeStyle = `hsl(217, 91%, 50%)`;
        }
        
        ctx.lineWidth = 1;
        ctx.beginPath();
        
        // Draw geometric shape (hexagon)
        for (let i = 0; i < 6; i++) {
          const angle = (i / 6) * Math.PI * 2;
          const x = Math.cos(angle) * this.size;
          const y = Math.sin(angle) * this.size;
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.closePath();
        ctx.stroke();
        
        ctx.restore();
      }
    }

    // Connection lines
    class ConnectionLine {
      constructor(
        public startX: number,
        public startY: number,
        public endX: number,
        public endY: number,
        public alpha: number = 0.1
      ) {}

      draw(ctx: CanvasRenderingContext2D) {
        const dark = isDarkMode();
        
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.strokeStyle = dark ? `hsl(217, 91%, 60%)` : `hsl(217, 91%, 50%)`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(this.startX, this.startY);
        ctx.lineTo(this.endX, this.endY);
        ctx.stroke();
        ctx.restore();
      }
    }

    // Create particles
    const particles: GeometricParticle[] = [];
    for (let i = 0; i < 25; i++) {
      particles.push(new GeometricParticle());
    }

    // Animation loop
    const animate = () => {
      time++;
      
      // Clear canvas - theme aware
      const dark = isDarkMode();
      if (dark) {
        ctx.fillStyle = 'rgba(15, 23, 42, 0.02)';
      } else {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
      }
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw(ctx, time);
      });
      
      // Draw connections between nearby particles
      const connections: ConnectionLine[] = [];
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const alpha = (1 - distance / 150) * 0.05;
            connections.push(new ConnectionLine(
              particles[i].x,
              particles[i].y,
              particles[j].x,
              particles[j].y,
              alpha
            ));
          }
        }
      }
      
      connections.forEach(connection => {
        connection.draw(ctx);
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
      className="absolute inset-0 w-full h-full opacity-20"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default DNAAnimation;