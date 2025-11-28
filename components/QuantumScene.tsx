
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Workaround for TypeScript intrinsic elements to avoid type errors without external definitions
const Mesh = 'mesh' as any;
const MeshPhysicalMaterial = 'meshPhysicalMaterial' as any;
const MeshStandardMaterial = 'meshStandardMaterial' as any;
const Group = 'group' as any;
const AmbientLight = 'ambientLight' as any;
const PointLight = 'pointLight' as any;
const DirectionalLight = 'directionalLight' as any;
const Fog = 'fog' as any;
const InstancedMesh = 'instancedMesh' as any;

// Shared Geometries optimized for performance (32 segments is sufficient for mobile)
const sharedCellGeometry = new THREE.SphereGeometry(1, 32, 32); 
const sharedNucleusGeometry = new THREE.SphereGeometry(0.4, 24, 24);
const sharedParticleGeometry = new THREE.SphereGeometry(0.08, 8, 8);

// --- ORGANIC BIO-CELL COMPONENT ---
const BioCell: React.FC<{ 
    position: [number, number, number]; 
    scale?: number; 
    color: string; 
    darkMode: boolean;
    speed?: number; 
}> = ({ position, scale = 1, color, darkMode, speed = 1.0 }) => {
    const groupRef = useRef<THREE.Group>(null);
    const membraneRef = useRef<THREE.Mesh>(null);
    const nucleusRef = useRef<THREE.Mesh>(null);
    
    // Random offsets for organic variation
    const offset = useMemo(() => Math.random() * 100, []);

    useFrame((state) => {
        if (!groupRef.current || !membraneRef.current || !nucleusRef.current) return;
        
        const t = state.clock.getElapsedTime();
        const { pointer } = state; // Normalized coordinates (-1 to +1)

        // 1. DYNAMIC SWIMMING MOTION (Base Logic)
        // Use wider sine waves to simulate swimming through fluid
        const swimRange = 1.0 + (speed * 0.5); 
        
        // Multi-axis compound sine waves for non-linear organic path
        const yFloat = Math.sin(t * 0.3 * speed + offset) * swimRange; 
        const xDrift = Math.cos(t * 0.2 * speed + offset) * (swimRange * 0.8) + Math.sin(t * 0.05 * speed) * 0.5;
        const zDrift = Math.sin(t * 0.15 * speed + offset) * 0.5;

        // 2. MOUSE INTERACTION (Additive Fluid Dynamics)
        // We want the cells to slightly float towards/react to the mouse position
        // creating a "responsive environment" feel.
        const mouseX = pointer.x * 2.0; // Influence strength X
        const mouseY = pointer.y * 2.0; // Influence strength Y
        const lerpFactor = 0.05; // Smoothing factor (lower = smoother/slower)

        // Calculate Target Position (Base + Organic Drift + Mouse Influence)
        const targetX = position[0] + xDrift + mouseX;
        const targetY = position[1] + yFloat + mouseY;
        const targetZ = position[2] + zDrift;

        // Apply smooth interpolation (Lerp) to position
        groupRef.current.position.x += (targetX - groupRef.current.position.x) * lerpFactor;
        groupRef.current.position.y += (targetY - groupRef.current.position.y) * lerpFactor;
        groupRef.current.position.z += (targetZ - groupRef.current.position.z) * lerpFactor;
        
        // 3. DYNAMIC ROTATION
        // Combine constant organic spin with mouse-based tilt
        const targetRotX = (t * 0.15 * speed + offset) - (mouseY * 0.3);
        const targetRotY = (t * 0.1 * speed + offset) + (mouseX * 0.3);

        groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * lerpFactor;
        groupRef.current.rotation.y += (targetRotY - groupRef.current.rotation.y) * lerpFactor;

        // 4. MEMBRANE BREATHING (Squash and stretch)
        const breathe = 1 + Math.sin(t * 0.8 * speed + offset) * 0.05;
        membraneRef.current.scale.set(breathe, breathe, breathe);

        // 5. NUCLEUS PULSE
        const pulse = 1 + Math.sin(t * 2.5 + offset) * 0.08;
        nucleusRef.current.scale.set(pulse, pulse, pulse);
    });

    return (
        <Group ref={groupRef} position={position} scale={[scale, scale, scale]}>
            {/* Outer Membrane - The Glass Shell */}
            <Mesh ref={membraneRef} geometry={sharedCellGeometry}>
                <MeshPhysicalMaterial
                    // DARK MODE FIX:
                    // In dark mode, we lower transmission (less transparent) and increase opacity
                    // so the shell is visible against the black background.
                    color={darkMode ? "#e5e7eb" : "#ffffff"} 
                    transmission={darkMode ? 0.2 : 0.6} // Lower transmission in dark mode makes it look "milky"/visible
                    opacity={darkMode ? 0.6 : 0.5}       // Higher opacity in dark mode
                    transparent
                    roughness={darkMode ? 0.3 : 0.15}    // More roughness in dark mode catches highlights better
                    metalness={0.1}
                    ior={1.5}
                    thickness={scale}
                    clearcoat={1}
                />
            </Mesh>
            
            {/* Inner Nucleus - The Glowing Core */}
            <Mesh ref={nucleusRef} geometry={sharedNucleusGeometry}>
                <MeshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={darkMode ? 2.5 : 0.6} // Brighter glow in dark mode
                    roughness={0.4}
                />
            </Mesh>
        </Group>
    );
};

// --- INSTANCED BACKGROUND PARTICLES ---
const BackgroundParticles: React.FC<{ count: number; color: string; area: number; darkMode: boolean }> = ({ count, color, area, darkMode }) => {
    const meshRef = useRef<THREE.InstancedMesh>(null);
    const tempObj = useMemo(() => new THREE.Object3D(), []);
    
    const particles = useMemo(() => {
        return new Array(count).fill(0).map(() => ({
            x: (Math.random() - 0.5) * area,
            y: (Math.random() - 0.5) * area,
            z: (Math.random() - 0.5) * 12 - 4, 
            speed: Math.random() * 0.5 + 0.2, 
            offset: Math.random() * 100,
            scale: Math.random() * 0.5 + 0.3
        }));
    }, [count, area]);

    useFrame((state) => {
        if (!meshRef.current) return;
        const t = state.clock.getElapsedTime();

        particles.forEach((p, i) => {
            const y = p.y + Math.sin(t * p.speed + p.offset) * 1.5;
            const x = p.x + Math.sin(t * p.speed * 0.5 + p.offset) * 1.0;
            const rot = t * p.speed;
            
            tempObj.position.set(x, y, p.z);
            tempObj.rotation.set(rot, rot * 0.5, 0);
            tempObj.scale.set(p.scale, p.scale, p.scale);
            tempObj.updateMatrix();
            
            meshRef.current.setMatrixAt(i, tempObj.matrix);
        });
        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <InstancedMesh ref={meshRef} args={[sharedParticleGeometry, null, count]}>
            <MeshStandardMaterial 
                color={color} 
                transparent 
                opacity={darkMode ? 0.4 : 0.2} 
                roughness={0.1}
            />
        </InstancedMesh>
    );
};

export const BackgroundScene: React.FC<{ primaryColor: string; darkMode: boolean }> = ({ primaryColor, darkMode }) => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-1000" style={{ opacity: darkMode ? 0.8 : 0.6 }}>
      {/* Fallback Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br from-stone-50 to-stone-200 dark:from-black dark:to-stone-900 -z-10`} />

      <Canvas
        camera={{ position: [0, 0, 14], fov: 45 }}
        dpr={[1, 1.5]} // Performance optimization
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      >
        <Fog attach="fog" args={[darkMode ? '#000000' : '#f5f5f4', 8, 45]} />
        
        {/* Cinematic Lighting Setup */}
        <AmbientLight intensity={darkMode ? 0.3 : 0.6} />
        
        {/* Main Rim Light - Positioned for Drama */}
        <PointLight 
            position={[-15, 5, 8]} 
            intensity={darkMode ? 12 : 6} 
            color={primaryColor} 
            distance={50} 
            decay={2} 
        />
        
        {/* Fill Light for Dark Mode Visibility */}
        <DirectionalLight position={[5, 0, 10]} intensity={darkMode ? 3 : 1} color="#ffffff" />
        
        {/* --- BIO-CELL COMPOSITION (Natural & Coherent) --- */}
        
        {/* 1. HERO CELL (Right Foreground) - Main Focus */}
        <BioCell position={[5, 1, 0]} scale={2.5} color={primaryColor} darkMode={darkMode} speed={1.2} />
        
        {/* 2. DEPTH CELL (Left Background) - Adds scale */}
        <BioCell position={[-7, 4, -5]} scale={3.2} color={darkMode ? "#334155" : "#cbd5e1"} darkMode={darkMode} speed={0.8} />
        
        {/* 3. BALANCE CELL (Bottom Left) - Frames content */}
        <BioCell position={[-4, -4, -2]} scale={1.8} color={primaryColor} darkMode={darkMode} speed={1.0} />

        {/* 4. DETAIL CELL (Top Right Mid-ground) - Adds complexity */}
        <BioCell position={[8, 6, -3]} scale={1.3} color={primaryColor} darkMode={darkMode} speed={0.9} />
        
        {/* 5. TINY FLOATER (Bottom Right Foreground) - Adds parallax depth and detail */}
        <BioCell position={[6, -5, 2]} scale={0.7} color={darkMode ? "#94a3b8" : "#cbd5e1"} darkMode={darkMode} speed={1.4} />

        {/* 6. DISTANT CELL (Top Center) - Fills void seamlessly */}
        <BioCell position={[-2, 8, -8]} scale={1.5} color={primaryColor} darkMode={darkMode} speed={0.7} />

        {/* --- BACKGROUND PARTICLES --- */}
        <BackgroundParticles count={50} color={darkMode ? "#ffffff" : "#94a3b8"} area={35} darkMode={darkMode} />
      </Canvas>
    </div>
  );
};

export const HeroScene = BackgroundScene;
export const QuantumComputerScene = () => null;
