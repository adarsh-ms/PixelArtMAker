var height;
var weight;
var color;
var clickOnEditInputField = 0;
var pixelCanvasDiv;
var changedValue = false;

function heightChange(height) {
  var heightNew = height;
  var pixelCanvas = $("#pixelCanvas");
  var blankRow = $(".blankRow");
  var newRow = "<tr class = 'blankRow'></tr>";
  blankRow.remove();
  for (var i = 0; i < heightNew; i++) {
    pixelCanvas.append(newRow);
  }
}

function weightChange(weight) {
  var weightNew = weight;
  var pixelCanvas = $("#pixelCanvas");
  var blankRow = $(".blankRow");
  var blankColumn = $(".blankColumn");
  var newColumn = "<td class = 'blankColumn'></td>";
  blankColumn.remove();
  for (var i = 0; i < weightNew; i++) {
    blankRow.append(newColumn);
  }
}

var execute = function() {
  $(".helpIcon").on("click", function() {
    alert(
      "***********************The Pixel-Art-Maker************************\n\n                                    created by : Adarsh M S\n\n*******************************************************************\n\nTips :\n\n* Click on pixel boxes to color it \n* Double click on coloured boxes to erase the color  \n* Use edit button to change the color or reset the canvas"
    );
  });

  $("#submit").on("click", function() {
    // alert(clicked);
    height = $("#inputHeight").val();
    weight = $("#inputWeight").val();
    color = $("#colorPicker").val();
    if (!changedValue) {
      heightChange(height);
      weightChange(weight);
      $("body").css("display", "block");
      welcomePage = $("#welcomePage").detach();
      $("#pixelCanvasDiv").css("display", "block");
      $("h2").css("display", "inline-block");
      $("#pixelCanvas").css("display", "block");
    } else {
      $("body").css("display", "block");
      welcomePage = $("#welcomePage").detach();
      $("body").append(pixelCanvasDiv);
      heightChange(height);
      weightChange(weight);
      $("#pixelCanvasDiv").css("display", "block");
      $("h2").css("display", "inline-block");
      $("#pixelCanvas").css("display", "block");
      changedValue = false;
    }
  });

  $("#pixelCanvas").on("click", ".blankColumn", function() {
    var column = $(this);
    column.css("background-color", color);
  });

  $("#pixelCanvas").on("dblclick", ".blankColumn", function() {
    var column = $(this);
    column.css("background-color", "#ffffff");
  });

  $(".buttonEdit").on("click", function() {
    $(".buttonExit span").remove();
    $(".buttonExit").append("<span>Done</span>");
    $("#editInputHeight").attr("value", height);
    $("#editInputWeight").attr("value", weight);
    $("#editSizePicker").css("display", "inline");
  });

  $(".buttonExit").on("click", function() {
    var spanValue = $(".buttonExit span").text();
    if (spanValue === "Done") {
      $(".editInput").on("click", function() {
        clickOnEditInputField = 1;
      });
      if (clickOnEditInputField) {
        height = $("#editInputHeight").val();
        heightChange(height);
        weight = $("#editInputWeight").val();
        weightChange(weight);
        clickOnEditInputField = 0;
      }
      color = $("#editColorPicker").val();
      // alert(color);
      $(".buttonExit span").remove();
      $(".buttonExit").append("<span>Exit</span>");
      $("#editSizePicker").css("display", "none");
    } else {
      heightChange(0);
      weightChange(0);
      pixelCanvasDiv = $("#pixelCanvasDiv").detach();
      $("body").append(welcomePage);
      changedValue = true;
    }
  });
};

$(document).ready(function() {
  execute();
});
