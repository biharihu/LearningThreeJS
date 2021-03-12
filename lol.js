export default (_config) => {
  return [
    {
      name: "level1",
      data: { index: 0 },
      items: [
        {
          name: "level1IntersectModel",
          source: "/assets/experience/level1/intersect.glb",
        },
        {
          name: "level1FloorShadowTexture",
          source: "/assets/experience/level1/floorShadow.jpg",
          type: "texture",
        },
        {
          name: "level1BakedTexture",
          source: "/assets/experience/level1/baked.jpg",
          type: "texture",
        },
        {
          name: "level1BakedModel",
          source: "/assets/experience/level1/baked.glb",
        },
        {
          name: "level1CameraHeadModel",
          source: "/assets/experience/level1/cameraHead.glb",
        },
        {
          name: "level1SudoHeadModel",
          source: "/assets/experience/level1/sudoHead.glb",
        },
        {
          name: "level1CactusModel",
          source: "/assets/experience/level1/cactus.glb",
        },
        {
          name: "level1CubeModel",
          source: "/assets/experience/level1/cube.glb",
        },
        {
          name: "level1PyramidModel",
          source: "/assets/experience/level1/pyramid.glb",
        },
        {
          name: "level1DogModel",
          source: `/assets/experience/level1/${
            _config.ouka ? "ouka" : "sudo"
          }.glb`,
        },

        {
          name: "matcapPinkOnBeigeTexture",
          source: "/assets/experience/matcaps/pinkOnBeige.jpg",
          type: "texture",
        },
        {
          name: "matcapCyanOnBeigeTexture",
          source: "/assets/experience/matcaps/cyanOnBeige.jpg",
          type: "texture",
        },
        {
          name: "matcapWhiteOnPurpleTexture",
          source: "/assets/experience/matcaps/whiteOnPurple.jpg",
          type: "texture",
        },
        {
          name: "matcapDarkGreyOnWhiteTexture",
          source: "/assets/experience/matcaps/darkGreyOnWhite.jpg",
          type: "texture",
        },
        {
          name: "matcapOrangeOnDarkGreyTexture",
          source: "/assets/experience/matcaps/orangeOnDarkGrey.jpg",
          type: "texture",
        },
        {
          name: "matcapDarkGreyOnDarkGreyTexture",
          source: "/assets/experience/matcaps/darkGreyOnDarkGrey.jpg",
          type: "texture",
        },
        {
          name: "matcapGreenOnPurpleTexture",
          source: "/assets/experience/matcaps/greenOnPurple.jpg",
          type: "texture",
        },
        {
          name: "matcapPinkOnPurpleTexture",
          source: "/assets/experience/matcaps/pinkOnPurple.jpg",
          type: "texture",
        },
        {
          name: "matcapRedOnPurpleTexture",
          source: "/assets/experience/matcaps/redOnPurple.jpg",
          type: "texture",
        },
      ],
    },
    {
      name: "level2",
      data: { index: 1 },
      items: [
        {
          name: "level2IntersectModel",
          source: "/assets/experience/level2/intersect.glb",
        },
        {
          name: "level2BakedTexture",
          source: "/assets/experience/level2/baked.jpg",
          type: "texture",
        },
        {
          name: "level2BakedModel",
          source: "/assets/experience/level2/baked.glb",
        },
        {
          name: "level2WindowModel",
          source: "/assets/experience/level2/window.glb",
        },
        {
          name: "level2BlockBakedTexture",
          source: "/assets/experience/level2/blockBaked.jpg",
          type: "texture",
        },
        {
          name: "level2BlockBakedModel",
          source: "/assets/experience/level2/blockBaked.glb",
        },
        {
          name: "level2BasicsModel",
          source: "/assets/experience/level2/basics.glb",
        },
        {
          name: "level2FloorShadowTexture",
          source: "/assets/experience/level2/floorShadow.jpg",
          type: "texture",
        },
        {
          name: "level2FloorShadowModel",
          source: "/assets/experience/level2/floorShadow.glb",
        },
        {
          name: "level2LaserModel",
          source: "/assets/experience/level2/laser.glb",
        },
        {
          name: "level2IntersectsModel",
          source: "/assets/experience/level2/intersects.glb",
        },
        { name: "level2Beam", source: "/assets/experience/level2/beam.png" },
        {
          name: "level2BeamGradientTexture",
          source: "/assets/experience/level2/beamGradient.png",
          type: "texture",
        },
      ],
    },
    {
      name: "level3",
      data: { index: 2 },
      items: [
        {
          name: "level3IntersectModel",
          source: "/assets/experience/level3/intersect.glb",
        },
        {
          name: "level3BakedTexture",
          source: "/assets/experience/level3/baked.jpg",
          type: "texture",
        },
        {
          name: "level3BakedModel",
          source: "/assets/experience/level3/baked.glb",
        },
        {
          name: "level3BlockBakedTexture",
          source: "/assets/experience/level3/blockBaked.jpg",
          type: "texture",
        },
        {
          name: "level3BlockBakedModel",
          source: "/assets/experience/level3/blockBaked.glb",
        },
        {
          name: "level3PrinterModel",
          source: "/assets/experience/level3/printer.glb",
        },
        {
          name: "level3DroneModel",
          source: "/assets/experience/level3/drone.glb",
        },
      ],
    },
    {
      name: "level4",
      data: { index: 3 },
      items: [
        {
          name: "level4IntersectModel",
          source: "/assets/experience/level4/intersect.glb",
        },
        {
          name: "level4BakedTexture",
          source: "/assets/experience/level4/baked.jpg",
          type: "texture",
        },
        {
          name: "level4BakedModel",
          source: "/assets/experience/level4/baked.glb",
        },
        {
          name: "level4BlockBakedTexture",
          source: "/assets/experience/level4/blockBaked.jpg",
          type: "texture",
        },
        {
          name: "level4BlockBakedModel",
          source: "/assets/experience/level4/blockBaked.glb",
        },
        {
          name: "level4PrimitivesInBoxModel",
          source: "/assets/experience/level4/primitivesInBox.glb",
        },
        {
          name: "level4PrimitivesInSlideModel",
          source: "/assets/experience/level4/primitivesInSlide.glb",
        },
        {
          name: "level4PrimitivesCubeModel",
          source: "/assets/experience/level4/primitivesCube.glb",
        },
        {
          name: "level4PrimitivesCylinderModel",
          source: "/assets/experience/level4/primitivesCylinder.glb",
        },
        {
          name: "level4PrimitivesSphereModel",
          source: "/assets/experience/level4/primitivesSphere.glb",
        },
        { name: "level4BoxModel", source: "/assets/experience/level4/box.glb" },
        {
          name: "level4ElevatorModel",
          source: "/assets/experience/level4/elevator.glb",
        },
        {
          name: "level4OuterWallsModel",
          source: "/assets/experience/level4/outerWalls.glb",
        },
        {
          name: "level4ShadowTexture",
          source: "/assets/experience/level4/shadow.png",
          type: "texture",
        },
      ],
    },
    {
      name: "level5",
      data: { index: 4 },
      items: [
        {
          name: "level5IntersectModel",
          source: "/assets/experience/level5/intersect.glb",
        },
        {
          name: "level5BakedTexture",
          source: "/assets/experience/level5/baked.jpg",
          type: "texture",
        },
        {
          name: "level5BakedModel",
          source: "/assets/experience/level5/baked.glb",
        },
        {
          name: "level5BlockBakedTexture",
          source: "/assets/experience/level5/blockBaked.jpg",
          type: "texture",
        },
        {
          name: "level5BlockBakedModel",
          source: "/assets/experience/level5/blockBaked.glb",
        },
        {
          name: "level5ScreensBakedTexture",
          source: "/assets/experience/level5/screensBaked.jpg",
          type: "texture",
        },
        {
          name: "level5ScreensBakedModel",
          source: "/assets/experience/level5/screensBaked.glb",
        },
        {
          name: "level5EmissivesModel",
          source: "/assets/experience/level5/emissives.glb",
        },
        { name: "level5CarModel", source: "/assets/experience/level5/car.glb" },
        {
          name: "level5ScreensInterfaceTexture",
          source: "/assets/experience/level5/screensInterface.png",
          type: "texture",
        },
      ],
    },
  ];
};
