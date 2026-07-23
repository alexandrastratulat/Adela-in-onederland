import { useRef } from "react";
import { Float } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Book() {

  const frontCover = useRef();
  const pages = useRef();

  useGSAP(() => {

    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 6
    });

    tl.to(frontCover.current.rotation, {
      y: -Math.PI * 0.82,
      duration: 2.2,
      ease: "power3.inOut"
    });

    tl.to(pages.current.rotation, {
      y: -0.08,
      duration: 1,
      ease: "power2.out"
    }, "-=1.4");

    tl.to({}, { duration: 3 });

    tl.to(frontCover.current.rotation, {
      y: 0,
      duration: 1.8,
      ease: "power3.inOut"
    });

    tl.to(pages.current.rotation, {
      y: 0,
      duration: 1
    }, "-=1.4");

  });

  return (

    <Float
      speed={1.4}
      rotationIntensity={0.15}
      floatIntensity={0.3}
    >

      <group>

        {/* Coperta spate */}

        <mesh position={[0,0,-0.12]}>
          <boxGeometry args={[3.8,5.2,0.12]} />
          <meshStandardMaterial color="#F5E6D8"/>
        </mesh>

        {/* Paginile */}

        <mesh ref={pages}>
          <boxGeometry args={[3.55,4.95,0.18]} />
          <meshStandardMaterial color="#FFFDF8"/>
        </mesh>

        {/* Coperta față */}

        <group ref={frontCover} position={[-1.9,0,0]}>

          <mesh position={[1.9,0,0.12]}>
            <boxGeometry args={[3.8,5.2,0.12]} />
            <meshStandardMaterial
              color="#EFD8C7"
              metalness={0.05}
              roughness={0.7}
            />
          </mesh>

        </group>

      </group>

    </Float>

  );

}
