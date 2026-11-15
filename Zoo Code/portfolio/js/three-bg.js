/* ========================================
   THREE.JS 3D HOVERING BACKGROUND
   Real-time interactive particle system
   ======================================== */

class ThreeBackground {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.particles = null;
        this.mouse = new THREE.Vector2();
        this.targetMouse = new THREE.Vector2();
        this.windowHalf = new THREE.Vector2(window.innerWidth / 2, window.innerHeight / 2);
        this.clock = new THREE.Clock();
        this.init();
        this.animate();
    }

    init() {
        // Scene setup
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.FogExp2(0x020617, 0.002);

        // Camera
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 5;

        // Renderer
        this.renderer = new THREE.WebGLRenderer({
            canvas: document.getElementById('bg-canvas'),
            alpha: true,
            antialias: true
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);

        // Create floating 3D particles
        this.createParticles();

        // Create floating geometric shapes
        this.createShapes();

        // Event listeners
        window.addEventListener('resize', this.onWindowResize.bind(this));
        document.addEventListener('mousemove', this.onMouseMove.bind(this));
    }

    createParticles() {
        const geometry = new THREE.BufferGeometry();
        const count = 1500;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const sizes = new Float32Array(count);

        const color1 = new THREE.Color(0x6366f1); // Indigo
        const color2 = new THREE.Color(0xec4899); // Pink

        for (let i = 0; i < count * 3; i += 3) {
            positions[i] = (Math.random() - 0.5) * 20;
            positions[i + 1] = (Math.random() - 0.5) * 20;
            positions[i + 2] = (Math.random() - 0.5) * 20;

            const color = new THREE.Color().lerpColors(color1, color2, Math.random());
            colors[i] = color.r;
            colors[i + 1] = color.g;
            colors[i + 2] = color.b;

            sizes[i / 3] = Math.random() * 0.05 + 0.02;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        const material = new THREE.PointsMaterial({
            size: 0.05,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            sizeAttenuation: true
        });

        this.particles = new THREE.Points(geometry, material);
        this.scene.add(this.particles);
    }

    createShapes() {
        // Create floating geometric shapes
        const shapes = [];
        const shapeCount = 10;

        for (let i = 0; i < shapeCount; i++) {
            const geometry = new THREE.IcosahedronGeometry(Math.random() * 0.5 + 0.2, 1);
            const material = new THREE.MeshStandardMaterial({
                color: Math.random() > 0.5 ? 0x6366f1 : 0xec4899,
                wireframe: true,
                transparent: true,
                opacity: 0.3
            });
            const mesh = new THREE.Mesh(geometry, material);

            mesh.position.set(
                (Math.random() - 0.5) * 15,
                (Math.random() - 0.5) * 15,
                (Math.random() - 0.5) * 15
            );

            mesh.rotation.set(
                Math.random() * Math.PI,
                Math.random() * Math.PI,
                Math.random() * Math.PI
            );

            mesh.userData = {
                rotationSpeed: {
                    x: (Math.random() - 0.5) * 0.02,
                    y: (Math.random() - 0.5) * 0.02,
                    z: (Math.random() - 0.5) * 0.02
                },
                floatSpeed: Math.random() * 0.002 + 0.001,
                floatOffset: Math.random() * Math.PI * 2
            };

            this.scene.add(mesh);
            shapes.push(mesh);
        }

        this.shapes = shapes;

        // Add ambient light
        const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
        this.scene.add(ambientLight);

        // Add point light
        const pointLight = new THREE.PointLight(0x6366f1, 1);
        pointLight.position.set(5, 5, 5);
        this.scene.add(pointLight);

        const pointLight2 = new THREE.PointLight(0xec4899, 1);
        pointLight2.position.set(-5, -5, 5);
        this.scene.add(pointLight2);
    }

    onMouseMove(event) {
        this.mouse.x = (event.clientX - this.windowHalf.x) / this.windowHalf.x;
        this.mouse.y = -(event.clientY - this.windowHalf.y) / this.windowHalf.y;
    }

    onWindowResize() {
        this.windowHalf.set(window.innerWidth / 2, window.innerHeight / 2);
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));

        const time = this.clock.getElapsedTime();

        // Smooth mouse follow
        this.targetMouse.lerp(this.mouse, 0.05);

        // Rotate particles based on mouse
        if (this.particles) {
            this.particles.rotation.y = this.targetMouse.x * 0.5;
            this.particles.rotation.x = this.targetMouse.y * 0.5;
            this.particles.rotation.z = Math.sin(time * 0.5) * 0.1;
        }

        // Animate shapes
        if (this.shapes) {
            this.shapes.forEach((shape, index) => {
                shape.rotation.x += shape.userData.rotationSpeed.x;
                shape.rotation.y += shape.userData.rotationSpeed.y;
                shape.rotation.z += shape.userData.rotationSpeed.z;

                // Floating animation
                shape.position.y += Math.sin(time * shape.userData.floatSpeed + shape.userData.floatOffset) * 0.01;
            });
        }

        // Camera subtle movement
        this.camera.position.x += (this.targetMouse.x * 2 - this.camera.position.x) * 0.05;
        this.camera.position.y += (-this.targetMouse.y * 2 - this.camera.position.y) * 0.05;
        this.camera.lookAt(this.scene.position);

        this.renderer.render(this.scene, this.camera);
    }
}

// Initialize Three.js background when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThreeBackground();
});