import React, { useRef } from "react";
import { useGLTF  } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import roomScene from "../assets/3d/room.glb";

export function Room(props) {
  const { nodes, materials } = useGLTF(roomScene);

  const roomRef = useRef();

  useFrame((_, delta) => {
    roomRef.current.rotation.y += 0.25 * delta;
  });


  return (
    <group {...props} dispose={null} ref={roomRef}>
      <group name="Scene">
        <mesh
          name="Cube001_Cube002"
          castShadow
          receiveShadow
          geometry={nodes.Cube001_Cube002.geometry}
          material={materials["Material.002"]}
          position={[1.553, 0.631, 0.065]}
          rotation={[Math.PI / 2, 0, 3.139]}
          scale={0.158}
        />
        <mesh
          name="Cube002_Cube003"
          castShadow
          receiveShadow
          geometry={nodes.Cube002_Cube003.geometry}
          material={materials["Material.002"]}
          position={[1.759, 0.727, 0.201]}
          rotation={[Math.PI / 2, 0, 3.139]}
          scale={0.158}
        />
        <mesh
          name="Cube003_Cube004"
          castShadow
          receiveShadow
          geometry={nodes.Cube003_Cube004.geometry}
          material={materials["Material.002"]}
          position={[1.758, 0.727, -0.055]}
          rotation={[Math.PI / 2, 0, 3.139]}
          scale={0.158}
        />
        <group
          name="Cube_Cube001"
          position={[1.641, 0.639, 0.072]}
          rotation={[Math.PI / 2, 0, 3.139]}
          scale={0.158}
        >
          <mesh
            name="Cube_Cube001_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube_Cube001_1.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            name="Cube_Cube001_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube_Cube001_2.geometry}
            material={materials["Material.002"]}
          />
        </group>
        <mesh
          name="Cylinder"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials["Material.003"]}
          position={[1.533, 0.63, 0.061]}
          rotation={[Math.PI / 2, 0, 3.139]}
          scale={0.158}
        />
        <mesh
          name="Google_Top"
          castShadow
          receiveShadow
          geometry={nodes.Google_Top.geometry}
          material={materials.Top_Material}
          position={[0.988, 0.62, 1.048]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={1.165}
        >
          <mesh
            name="Google_Bottom"
            castShadow
            receiveShadow
            geometry={nodes.Google_Bottom.geometry}
            material={materials["Composite Rubber"]}
          />
          <mesh
            name="Google_Button"
            castShadow
            receiveShadow
            geometry={nodes.Google_Button.geometry}
            material={materials.Button_Material}
          />
          <mesh
            name="Google_Speaker"
            castShadow
            receiveShadow
            geometry={nodes.Google_Speaker.geometry}
            material={materials.Speaker_Material_1}
          />
        </mesh>
        <group
          name="Large_Plant"
          position={[-1.015, 0.589, -1.273]}
          rotation={[0, -0.518, 0]}
          scale={0.639}
        >
          <mesh
            name="Plant_Leaf_Color001"
            castShadow
            receiveShadow
            geometry={nodes.Plant_Leaf_Color001.geometry}
            material={materials["Plant Leaf Shader"]}
          />
          <mesh
            name="Plant_Leaf_Color001_1"
            castShadow
            receiveShadow
            geometry={nodes.Plant_Leaf_Color001_1.geometry}
            material={materials["Pot Shader"]}
          />
        </group>
        <group
          name="Studio_Speaker002"
          position={[-0.556, 0.927, -1.279]}
          rotation={[0, 0.301, 0]}
          scale={[0.013, 0.003, 0.013]}
        >
          <mesh
            name="Cylinder001"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001.geometry}
            material={materials["Speaker Black"]}
          />
          <mesh
            name="Cylinder001_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_1.geometry}
            material={materials["Speaker White"]}
          />
        </group>
        <group name="Desk_#2" position={[0.653, -0.012, -1.106]}>
          <mesh
            name="Cube022"
            castShadow
            receiveShadow
            geometry={nodes.Cube022.geometry}
            material={materials["Desk Oak"]}
          />
          <mesh
            name="Cube022_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube022_1.geometry}
            material={materials["Metal Black"]}
          />
        </group>
        <group
          name="Computer_Chair"
          position={[0.082, -0.002, -0.471]}
          rotation={[3.134, -0.496, 3.138]}
          scale={[0.417, 0.352, 0.417]}
        >
          <mesh
            name="Cylinder004"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004.geometry}
            material={materials["Black Plastic"]}
          />
          <mesh
            name="Cylinder004_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004_1.geometry}
            material={materials.Chrome}
          />
          <mesh
            name="Cylinder004_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004_2.geometry}
            material={materials["Chair Seat"]}
          />
        </group>
        <group
          name="Bin"
          position={[-0.941, 0.01, -0.891]}
          scale={[0.121, 0.008, 0.121]}
        >
          <mesh
            name="Cylinder032"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder032.geometry}
            material={materials["Bin Metal"]}
          />
          <mesh
            name="Cylinder032_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder032_1.geometry}
            material={materials["Bin Shader"]}
          />
        </group>
        <group
          name="Studio_Speaker"
          position={[0.539, 0.924, -1.28]}
          rotation={[0, -0.232, 0]}
          scale={[0.013, 0.003, 0.013]}
        >
          <mesh
            name="Cylinder020"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder020.geometry}
            material={materials["Speaker Black"]}
          />
          <mesh
            name="Cylinder020_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder020_1.geometry}
            material={materials["Speaker White"]}
          />
        </group>
        <group
          name="iMac_Silver"
          position={[-0.009, 0.785, -1.32]}
          scale={1.029}
        >
          <mesh
            name="Cylinder010"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010.geometry}
            material={materials["iMac Grey Shader"]}
          />
          <mesh
            name="Cylinder010_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010_1.geometry}
            material={materials.glass_mat}
          />
        </group>
        <group
          name="Monitor_Riser"
          position={[-0.001, 0.702, -1.316]}
          scale={[0.442, 0.014, 0.091]}
        >
          <mesh
            name="Cube047"
            castShadow
            receiveShadow
            geometry={nodes.Cube047.geometry}
            material={materials["Desk Oak"]}
          />
          <mesh
            name="Cube047_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube047_1.geometry}
            material={materials["Desk Black"]}
          />
        </group>
        <mesh
          name="Desk_Mat"
          castShadow
          receiveShadow
          geometry={nodes.Desk_Mat.geometry}
          material={materials["Mat Black"]}
          position={[-0.005, 0.703, -1.005]}
          scale={1.063}
        />
        <group
          name="Keyboard"
          position={[-0.1, 0.716, -1]}
          rotation={[0.042, 0.092, -0.004]}
        >
          <mesh
            name="Cube029"
            castShadow
            receiveShadow
            geometry={nodes.Cube029.geometry}
            material={materials["Keyboard Keys"]}
          />
          <mesh
            name="Cube029_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube029_1.geometry}
            material={materials["iMac Grey Aluminium"]}
          />
          <mesh
            name="Cube029_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube029_2.geometry}
            material={materials["iMac White Glass"]}
          />
        </group>
        <group
          name="Trackpad"
          position={[0.191, 0.712, -1.004]}
          rotation={[0, -0.099, 0]}
        >
          <mesh
            name="Cube043"
            castShadow
            receiveShadow
            geometry={nodes.Cube043.geometry}
            material={materials["iMac Grey Aluminium"]}
          />
          <mesh
            name="Cube043_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube043_1.geometry}
            material={materials["iMac White Glass.001"]}
          />
        </group>
        <group
          name="enchufe_original"
          position={[1.137, 0.9, -1.617]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.011}
        >
          <mesh
            name="back"
            castShadow
            receiveShadow
            geometry={nodes.back.geometry}
            material={materials.enchufeback_mat}
            position={[0.014, -0.403, -6.026]}
          />
          <mesh
            name="bottom"
            castShadow
            receiveShadow
            geometry={nodes.bottom.geometry}
            material={materials.enchufefrontcolor_mat}
            position={[-0.041, 0.114, -1.374]}
          />
          <mesh
            name="center"
            castShadow
            receiveShadow
            geometry={nodes.center.geometry}
            material={materials.enchufefrontcolor_mat}
            position={[-0.02, 0.195, -6.024]}
          />
          <mesh
            name="side_01"
            castShadow
            receiveShadow
            geometry={nodes.side_01.geometry}
            material={materials.enchufefrontcolor_mat}
            position={[-3.184, 0.114, -5.99]}
          />
          <mesh
            name="side_02"
            castShadow
            receiveShadow
            geometry={nodes.side_02.geometry}
            material={materials.enchufefrontcolor_mat}
            position={[3.102, 0.131, -5.99]}
          />
          <mesh
            name="top1"
            castShadow
            receiveShadow
            geometry={nodes.top1.geometry}
            material={materials.enchufefrontcolor_mat}
            position={[-0.048, 0.127, -10.677]}
          />
        </group>
        <mesh
          name="Motion_sensor_correct"
          castShadow
          receiveShadow
          geometry={nodes.Motion_sensor_correct.geometry}
          material={materials["Material.002"]}
          position={[-0.794, 1.04, 1.079]}
          rotation={[Math.PI / 2, 0, -3.136]}
          scale={0.003}
        />
        <mesh
          name="Motion_sensor_correct001"
          castShadow
          receiveShadow
          geometry={nodes.Motion_sensor_correct001.geometry}
          material={materials["Material.002"]}
          position={[-0.794, 1.04, 1.079]}
          rotation={[Math.PI / 2, 0, -3.136]}
          scale={0.003}
        />
        <mesh
          name="Motion_sensor_correct002"
          castShadow
          receiveShadow
          geometry={nodes.Motion_sensor_correct002.geometry}
          material={materials["Material.002"]}
          position={[-0.794, 1.04, 1.079]}
          rotation={[Math.PI / 2, 0, -3.136]}
          scale={0.003}
        />
        <mesh
          name="Motion_sensor_correct003"
          castShadow
          receiveShadow
          geometry={nodes.Motion_sensor_correct003.geometry}
          material={materials["Material.002"]}
          position={[-0.794, 1.04, 1.079]}
          rotation={[Math.PI / 2, 0, -3.136]}
          scale={0.003}
        />
        <mesh
          name="Motion_sensor_correct004"
          castShadow
          receiveShadow
          geometry={nodes.Motion_sensor_correct004.geometry}
          material={materials["Material.002"]}
          position={[-0.794, 1.04, 1.079]}
          rotation={[Math.PI / 2, 0, -3.136]}
          scale={0.003}
        />
        <mesh
          name="Motion_sensor_correct005"
          castShadow
          receiveShadow
          geometry={nodes.Motion_sensor_correct005.geometry}
          material={materials["Material.002"]}
          position={[-0.794, 1.04, 1.079]}
          rotation={[Math.PI / 2, 0, -3.136]}
          scale={0.003}
        />
        <mesh
          name="Motion_sensor_correct006"
          castShadow
          receiveShadow
          geometry={nodes.Motion_sensor_correct006.geometry}
          material={materials["Material.001"]}
          position={[-0.794, 1.04, 1.079]}
          rotation={[Math.PI / 2, 0, -3.136]}
          scale={0.003}
        />
        <group
          name="Xiaomi_Vacuum_Cleaner_Robot"
          position={[-1.493, 0.151, 0.147]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.01}
        >
          <mesh
            name="Mesh030"
            castShadow
            receiveShadow
            geometry={nodes.Mesh030.geometry}
            material={materials.VacuumBody}
          />
          <mesh
            name="Mesh030_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh030_1.geometry}
            material={materials.VacuumGray}
          />
          <mesh
            name="Mesh030_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh030_2.geometry}
            material={materials.VacuumBlack}
          />
          <mesh
            name="Mesh030_3"
            castShadow
            receiveShadow
            geometry={nodes.Mesh030_3.geometry}
            material={materials.VacuumButtons}
          />
          <mesh
            name="Mesh030_4"
            castShadow
            receiveShadow
            geometry={nodes.Mesh030_4.geometry}
            material={materials.VacuumGlass}
          />
        </group>
        <group
          name="Sketchfab_model"
          position={[0, 2.093, 0.369]}
          rotation={[1.578, 0, 0]}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Conector_4">
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials.Metal_2}
                />
              </group>
              <group name="Estructura_2">
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.Blanco}
                />
              </group>
              <group name="Interseccion_5">
                <mesh
                  name="Object_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials.Blanco_2}
                />
              </group>
              <group name="LED_3">
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials.Difuso}
                />
              </group>
              <group name="Rosca_1">
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.Metal}
                />
              </group>
            </group>
          </group>
        </group>
        <group
          name="Cube000_Cube017"
          position={[0.026, 1.114, 1.059]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={1.217}
        >
          <mesh
            name="Cube000_Cube017_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube000_Cube017_1.geometry}
            material={materials["Material.004"]}
          />
          <mesh
            name="Cube000_Cube017_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube000_Cube017_2.geometry}
            material={materials["Material.005"]}
          />
        </group>
        <group
          name="Cube001_Cylinder016"
          position={[0.026, 1.114, 1.059]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={1.217}
        >
          <mesh
            name="Cube001_Cylinder016_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_Cylinder016_1.geometry}
            material={materials["Material.004"]}
          />
          <mesh
            name="Cube001_Cylinder016_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_Cylinder016_2.geometry}
            material={materials["Material.006"]}
          />
        </group>
        <group
          name="Cube002_Cylinder020"
          position={[0.026, 1.114, 1.059]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={1.217}
        >
          <mesh
            name="Cube002_Cylinder020_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube002_Cylinder020_1.geometry}
            material={materials["Material.004"]}
          />
          <mesh
            name="Cube002_Cylinder020_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube002_Cylinder020_2.geometry}
            material={materials["Material.006"]}
          />
          <mesh
            name="Cube002_Cylinder020_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube002_Cylinder020_3.geometry}
            material={materials["Material.007"]}
          />
          <mesh
            name="Cube002_Cylinder020_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube002_Cylinder020_4.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            name="Cube002_Cylinder020_5"
            castShadow
            receiveShadow
            geometry={nodes.Cube002_Cylinder020_5.geometry}
            material={materials["Material.000"]}
          />
          <mesh
            name="Cube002_Cylinder020_6"
            castShadow
            receiveShadow
            geometry={nodes.Cube002_Cylinder020_6.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            name="Cube002_Cylinder020_7"
            castShadow
            receiveShadow
            geometry={nodes.Cube002_Cylinder020_7.geometry}
            material={materials["Material.010"]}
          />
          <mesh
            name="Cube002_Cylinder020_8"
            castShadow
            receiveShadow
            geometry={nodes.Cube002_Cylinder020_8.geometry}
            material={materials["Material.011"]}
          />
          <mesh
            name="Cube002_Cylinder020_9"
            castShadow
            receiveShadow
            geometry={nodes.Cube002_Cylinder020_9.geometry}
            material={materials["Material.012"]}
          />
        </group>
      </group>
    </group>
  );
}
