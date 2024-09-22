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
