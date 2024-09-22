$(document).ready(function () {
  // Object holding content for each project
  const projectContents = {
    "project-one": {
      title: "GOLDEN TABLE",
      images: [
        "./assets/images/goldenTable/goldenTableOne.jpg", // Display image
        "./assets/images/goldenTable/goldenTableTwo.jpg",
        "./assets/images/goldenTable/goldenTableThree.jpg",
        "./assets/images/goldenTable/goldenTableFour.jpg",
        "./assets/images/goldenTable/goldenTableFive.jpg",
        "./assets/images/goldenTable/goldenTableSix.jpg",
        "./assets/images/goldenTable/goldenTableSeven.jpg",
        "./assets/images/goldenTable/goldenTableEight.jpg",
      ],
    },
    "project-two": {
      title: "CRESCENT LAMP",
      images: [
        "./assets/images/cresentLamp/cresentLampOne.jpg", // Display image
        "./assets/images/cresentLamp/cresentLampTwo.jpg",
        "./assets/images/cresentLamp/cresentLampThree.jpg",
        "./assets/images/cresentLamp/cresentLampFour.jpg",
        "./assets/images/cresentLamp/cresentLampFive.jpg",
        "./assets/images/cresentLamp/cresentLampSix.jpg",
        "./assets/images/cresentLamp/cresentLampSeven.jpg",
        "./assets/images/cresentLamp/cresentLampEight.jpg",
      ],
    },
    "project-three": {
      title: "CASTLE UNIT",
      images: [
        "./assets/images/castleUnit/castleUnitOne.jpg", // Display image
        "./assets/images/castleUnit/castleUnitTwo.jpg",
        "./assets/images/castleUnit/castleUnitThree.jpg",
        "./assets/images/castleUnit/castleUnitFour.jpg",
        "./assets/images/castleUnit/castleUnitFive.jpg",
        "./assets/images/castleUnit/castleUnitSix.jpg",
        "./assets/images/castleUnit/castleUnitSeven.jpg",
        "./assets/images/castleUnit/castleUnitEight.jpg",
        "./assets/images/castleUnit/castleUnitNine.jpg",
      ],
    },
    "project-four": {
      title: "ZIGZAG TABLE",
      images: [
        "./assets/images/zigzagTable/zigzagTableOne.jpg", // Display image
        "./assets/images/zigzagTable/zigzagTableTwo.jpg",
        "./assets/images/zigzagTable/zigzagTableThree.jpg",
        "./assets/images/zigzagTable/zigzagTableFour.jpg",
        "./assets/images/zigzagTable/zigzagTableFive.jpg",
        "./assets/images/zigzagTable/zigzagTableSix.jpg",
        "./assets/images/zigzagTable/zigzagTableSeven.jpg",
        "./assets/images/zigzagTable/zigzagTableEight.jpg",
        "./assets/images/zigzagTable/zigzagTableNine.jpg",
        "./assets/images/zigzagTable/zigzagTableTen.jpg",
      ],
    },
    "project-five": {
      title: "PIANO HANGER",
      images: [
        "./assets/images/pianoHanger/pianoHangerOne.jpg", // Display image
        "./assets/images/pianoHanger/pianoHangerTwo.jpg",
        "./assets/images/pianoHanger/pianoHangerThree.jpg",
        "./assets/images/pianoHanger/pianoHangerFour.jpg",
        "./assets/images/pianoHanger/pianoHangerFive.jpg",
        "./assets/images/pianoHanger/pianoHangerSix.jpg",
      ],
    },
    "project-six": {
      title: "MOSAIC PANEL",
      images: [
        "./assets/images/mosaicPanel/mosaicPanelOne.jpg", // Display image
        "./assets/images/mosaicPanel/mosaicPanelTwo.jpg",
        "./assets/images/mosaicPanel/mosaicPanelThree.jpg",
        "./assets/images/mosaicPanel/mosaicPanelFour.jpg",
        "./assets/images/mosaicPanel/mosaicPanelFive.jpg",
        "./assets/images/mosaicPanel/mosaicPanelSix.jpg",
        "./assets/images/mosaicPanel/mosaicPanelSeven.jpg",
      ],
    },
    "project-seven": {
      title: "MOLACULAR STOOL",
      images: [
        "./assets/images/molecularStool/molecularStoolOne.jpg", // Display image
        "./assets/images/molecularStool/molecularStoolTwo.jpg",
        "./assets/images/molecularStool/molecularStoolThree.jpg",
        "./assets/images/molecularStool/molecularStoolFour.jpg",
        "./assets/images/molecularStool/molecularStoolFive.jpg",
        "./assets/images/molecularStool/molecularStoolSix.jpg",
      ],
    },
    "project-eight": {
      title: "BIKE SEAT STOOL",
      images: [
        "./assets/images/bikeSeatStool/bikeSeatStoolOne.jpg", // Display image
        "./assets/images/bikeSeatStool/bikeSeatStoolTwo.jpg",
        "./assets/images/bikeSeatStool/bikeSeatStoolThree.jpg",
        "./assets/images/bikeSeatStool/bikeSeatStoolFour.jpg",
      ],
    },
    "project-nine": {
      title: "CLASSIC STOOL",
      images: [
        "./assets/images/classicalStool/classicalStoolOne.jpg", // Display image
        "./assets/images/classicalStool/classicalStoolTwo.jpg",
        "./assets/images/classicalStool/classicalStoolThree.jpg",
      ],
    },
    "project-ten": {
      title: "STAIR STOOL",
      images: [
        "./assets/images/stairStool/stairStoolOne.jpg", // Display image
        "./assets/images/stairStool/stairStoolTwo.jpg",
        "./assets/images/stairStool/stairStoolThree.jpg",
        "./assets/images/stairStool/stairStoolFour.jpg",
        "./assets/images/stairStool/stairStoolFive.jpg",
      ],
    },
    "project-eleven": {
      title: "SEMI CRESENT ",
      images: [
        "./assets/images/semiCresent/semiCresentOne.jpg", // Display image
        "./assets/images/semiCresent/semiCresentTwo.jpg",
        "./assets/images/semiCresent/semiCresentThree.jpg",
        "./assets/images/semiCresent/semiCresentFour.jpg",
        "./assets/images/semiCresent/semiCresentFive.jpg",
        "./assets/images/semiCresent/semiCresentSix.jpg",
        "./assets/images/semiCresent/semiCresentSeven.jpg",
      ],
    },
    "project-twelve": {
      title: "FOX BOARD",
      images: [
        "./assets/images/foxBoard/foxBoardOne.jpg", // Display image
        "./assets/images/foxBoard/foxBoardTwo.jpg",
        "./assets/images/foxBoard/foxBoardThree.jpg",
        "./assets/images/foxBoard/foxBoardFour.jpg",
        "./assets/images/foxBoard/foxBoardFive.jpg",
        "./assets/images/foxBoard/foxBoardSix.jpg",
      ],
    },
    "project-thirteen": {
      title: "MECHANICAL HEART",
      images: [
        "./assets/images/mechanicalHeart/mechanicalHeartOne.jpg", // Display image
        "./assets/images/mechanicalHeart/mechanicalHeartTwo.jpg",
        "./assets/images/mechanicalHeart/mechanicalHeartThree.jpg",
        "./assets/images/mechanicalHeart/mechanicalHeartFour.jpg",
      ],
    },
    "project-fourteen": {
      title: "UNCLE STOOL",
      images: [
        "./assets/images/uncleStool/uncleStoolOne.jpg", // Display image
        "./assets/images/uncleStool/uncleStoolTwo.jpg",
        "./assets/images/uncleStool/uncleStoolThree.jpg",
      ],
    },
    "project-fifteen": {
      title: "STAB SHARPENER",
      images: [
        "./assets/images/stabSharpener/stabSharpenerOne.jpg", // Display image
        "./assets/images/stabSharpener/stabSharpenerTwo.jpg",
        "./assets/images/stabSharpener/stabSharpenerThree.jpg",
        "./assets/images/stabSharpener/stabSharpenerFour.jpg",
      ],
    },
    "project-sixteen": {
      title: "HAND HANGER",
      images: [
        "./assets/images/handHanger/handHangerOne.jpg", // Display image
        "./assets/images/handHanger/handHangerTwo.jpg",
        "./assets/images/handHanger/handHangerThree.jpg",
        "./assets/images/handHanger/handHangerFour.jpg",
      ],
    },
    "project-seventeen": {
      title: "SMOKEY DRAGON",
      images: [
        "./assets/images/smokeyDragon/smokeyDragonOne.jpg", // Display image
        "./assets/images/smokeyDragon/smokeyDragonTwo.jpg",
        "./assets/images/smokeyDragon/smokeyDragonThree.jpg",
        "./assets/images/smokeyDragon/smokeyDragonFour.jpg",
        "./assets/images/smokeyDragon/smokeyDragonFive.jpg",
        "./assets/images/smokeyDragon/smokeyDragonSix.jpg",
      ],
    },
    "project-eighteen": {
      title: "FINGER BOARD",
      images: [
        "./assets/images/fingerBoard/fingerBoardOne.jpg", // Display image
        "./assets/images/fingerBoard/fingerBoardTwo.jpg",
        "./assets/images/fingerBoard/fingerBoardThree.jpg",
        "./assets/images/fingerBoard/fingerBoardFour.jpg",
      ],
    },
    "project-nineteen": {
      title: "CRASHPAD",
      images: [
        "./assets/images/crashPad/crashPadOne.jpg", // Display image
        "./assets/images/crashPad/crashPadTwo.jpg",
        "./assets/images/crashPad/crashPadThree.jpg",
        "./assets/images/crashPad/crashPadFour.jpg",
        "./assets/images/crashPad/crashPadFive.jpg",
        "./assets/images/crashPad/crashPadSix.jpg",
      ],
    },
    "project-twenty": {
      title: "ROCOCO CREATURE",
      images: [
        "./assets/images/rococoCreature/rococoCreatureOne.jpg", // Display image
        "./assets/images/rococoCreature/rococoCreatureTwo.jpg",
        "./assets/images/rococoCreature/rococoCreatureThree.jpg",
        "./assets/images/rococoCreature/rococoCreatureFour.jpg",
        "./assets/images/rococoCreature/rococoCreatureFive.jpg",
        "./assets/images/rococoCreature/rococoCreatureSix.jpg",
        "./assets/images/rococoCreature/rococoCreatureSeven.jpg",
        "./assets/images/rococoCreature/rococoCreatureEight.jpg",
        "./assets/images/rococoCreature/rococoCreatureNine.jpg",
        "./assets/images/rococoCreature/rococoCreatureTen.jpg",
        "./assets/images/rococoCreature/rococoCreatureEleven.jpg",
        "./assets/images/rococoCreature/rococoCreatureTwelve.jpg",
        "./assets/images/rococoCreature/rococoCreatureThirteen.jpg",
        "./assets/images/rococoCreature/rococoCreatureFourteen.jpg",
      ],
    },
    "project-twentyone": {
      title: "CANDLE HOLDER",
      images: [
        "./assets/images/candleHolder/candleHolderOne.jpg", // Display image
        "./assets/images/candleHolder/candleHolderTwo.jpg",
        "./assets/images/candleHolder/candleHolderThree.jpg",
        "./assets/images/candleHolder/candleHolderFour.jpg",
        "./assets/images/candleHolder/candleHolderFive.jpg",
      ],
    },
    "project-twentytwo": {
      title: "HAND POT",
      images: [
        "./assets/images/handPot/handPotOne.jpg", // Display image
        "./assets/images/handPot/handPotTwo.jpg",
        "./assets/images/handPot/handPotThree.jpg",
        "./assets/images/handPot/handPotFour.jpg",
        "./assets/images/handPot/handPotFive.jpg",
        "./assets/images/handPot/handPotSix.jpg",
      ],
    },
    "project-twentythree": {
      title: "BLUE BREAKFAST",
      images: [
        "./assets/images/blueBreakfast/blueBreakfastOne.jpg", // Display image
        "./assets/images/blueBreakfast/blueBreakfastTwo.jpg",
        "./assets/images/blueBreakfast/blueBreakfastThree.jpg",
        "./assets/images/blueBreakfast/blueBreakfastFour.jpg",
        "./assets/images/blueBreakfast/blueBreakfastFive.jpg",
      ],
    },
    "project-twentyfour": {
      title: "WALNUT PLATES",
      images: [
        "./assets/images/walnutPlates/walnutPlatesOne.jpg", // Display image
        "./assets/images/walnutPlates/walnutPlatesTwo.jpg",
        "./assets/images/walnutPlates/walnutPlatesThree.jpg",
        "./assets/images/walnutPlates/walnutPlatesFour.jpg",
      ],
    },
    "project-twentyfive": {
      title: "HANDLE SERIES",
      images: [
        "./assets/images/handleSeries/handleSeriesOne.jpg", // Display image
        "./assets/images/handleSeries/handleSeriesTwo.jpg",
        "./assets/images/handleSeries/handleSeriesThree.jpg",
        "./assets/images/handleSeries/handleSeriesFour.jpg",
        "./assets/images/handleSeries/handleSeriesFive.jpg",
        "./assets/images/handleSeries/handleSeriesSix.jpg",
        "./assets/images/handleSeries/handleSeriesSeven.jpg",
        "./assets/images/handleSeries/handleSeriesEight.jpg",
        "./assets/images/handleSeries/handleSeriesNine.jpg",
      ],
    },
    "project-twentysix": {
      title: "CROISSANT CHAIR",
      images: [
        "./assets/images/croissantChair/croissantChairOne.jpg", // Display image
        "./assets/images/croissantChair/croissantChairTwo.jpg",
        "./assets/images/croissantChair/croissantChairThree.jpg",
        "./assets/images/croissantChair/croissantChairFour.jpg",
        "./assets/images/croissantChair/croissantChairFive.jpg",
        "./assets/images/croissantChair/croissantChairSix.jpg",
        "./assets/images/croissantChair/croissantChairSeven.jpg",
        "./assets/images/croissantChair/croissantChairEight.jpg",
        "./assets/images/croissantChair/croissantChairNine.jpg",
        "./assets/images/croissantChair/croissantChairTen.jpg",
        "./assets/images/croissantChair/croissantChairEleven.jpg",
        "./assets/images/croissantChair/croissantChairTwelve.jpg",
      ],
    },
    // Add more projects here
  };

  $(".project").on("click", function () {
    const projectClasses = $(this).attr("class").split(" ");
    const projectClass = projectClasses.find((cls) =>
      cls.startsWith("project-")
    );

    const content = projectContents[projectClass];

    if (!content) {
      console.error(`No content found for ${projectClass}`);
      return;
    }

    let imagesHtml = "";

    if (content.images && content.images.length > 0) {
      imagesHtml += `
        <div class="display-image">
          <img src="${content.images[0]}" alt="${content.title}">
        </div>
      `;

      if (content.images.length > 1) {
        imagesHtml += '<div class="image-grid">';
        for (let i = 1; i < content.images.length; i++) {
          imagesHtml += `
            <div class="grid-image">
              <img src="${content.images[i]}" alt="${content.title} Image ${i}">
            </div>
          `;
        }
        imagesHtml += "</div>";
      }
    }

    const contentHtml = `
      <div class="close-button">X</div>
      <div class="project-content">
        <h1>${content.title}</h1>
        ${imagesHtml}
      </div>
    `;

    $(".project-container").html(contentHtml);
    $(".project-container").css({ top: "0" });
  });

  $(".project-container").on("click", ".close-button", function () {
    $(".project-container").css({ top: "100%" }, function () {
      $(".project-container").empty();
    });
  });
});
