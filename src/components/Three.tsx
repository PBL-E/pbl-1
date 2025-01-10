import { OrbitControls, ContactShadows} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

export function ThreeSample(){

    return(
     <Canvas shadows camera={{ position: [1, 2, -1]}} 
              style={{ width: '100%', 
                       height: '300px',
                       position: 'relative',
                       backgroundColor: 'black', 
            }}>
        <ambientLight intensity={2}/>
        <directionalLight 
        position={[1, 1, 2]} 
        intensity={2} 
        castShadow
        />
        <Cube />
        <ContactShadows position={[-0.1, 0, 0.1]} height={2} blur={5} far={10}/>
        <OrbitControls autoRotate />
     </Canvas>
    )
}

function Cube(){
    return(
      <mesh
            position={[0,-0.5,0]}>
        <boxGeometry args={[10,10]} />
        <meshStandardMaterial color="orange"/>
      </mesh>
    )
  }