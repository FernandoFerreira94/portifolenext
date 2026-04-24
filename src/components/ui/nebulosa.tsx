'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const NebulaMaterial = () => {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  return (
    <shaderMaterial
      ref={materialRef}
      transparent
      depthWrite={false}
      blending={THREE.AdditiveBlending}
      uniforms={{
        uTime: { value: 0 },
      }}
      vertexShader={`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `}
      fragmentShader={`
        varying vec2 vUv;
        uniform float uTime;

        // noise
        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453);
        }

        float noise(vec2 p){
          vec2 i = floor(p);
          vec2 f = fract(p);

          float a = hash(i);
          float b = hash(i + vec2(1.0, 0.0));
          float c = hash(i + vec2(0.0, 1.0));
          float d = hash(i + vec2(1.0, 1.0));

          vec2 u = f*f*(3.0-2.0*f);

          return mix(a, b, u.x) +
                 (c - a)*u.y*(1.0 - u.x) +
                 (d - b)*u.x*u.y;
        }

        float fbm(vec2 p) {
          float v = 0.0;
          float a = 0.5;
          for (int i = 0; i < 5; i++) {
            v += a * noise(p);
            p *= 2.0;
            a *= 0.5;
          }
          return v;
        }

        void main() {
          vec2 uv = vUv;

          // força horizontal (espalha mais no eixo X)
          uv.x *= 4.5;
          uv.y *= 4.2;

          float t = uTime * 0.25;

          float n = fbm(uv + t);

          // máscara canto inferior direito
          float maskX = smoothstep(0.4, 1.0, vUv.x);
          float maskY = smoothstep(0.2, 1.0, 1.0 - vUv.y);
          float mask = maskX * maskY;

          // cores
          vec3 blue = vec3(0.2, 0.5, 1.0);
          vec3 red = vec3(1.0, 0.2, 0.2);

          vec3 color = mix(blue, red, n);

          float alpha = n * mask * 0.5;

          gl_FragColor = vec4(color, alpha);
        }
      `}
    />
  );
};

const NebulaPlane = () => {
  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <NebulaMaterial />
    </mesh>
  );
};

export const NebulaFooter = () => {
  return (
    <div className="fixed bottom-0 right-0 w-full h-[500px] pointer-events-none z-[5]">
      <Canvas
        orthographic
        camera={{ position: [0, 0, 1], zoom: 1 }}
        gl={{ alpha: true }}
      >
        <NebulaPlane />
      </Canvas>
    </div>
  );
};

export default NebulaFooter;