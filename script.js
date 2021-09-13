var limits = new Map([
    ["mortgage_rate_start", 0],
    ["mortgage_rate_end", 12],
    ["purchase_price_start", 0],
    ["purchase_price_end", 1000000],
    ["down_payment_start", 0],
    ["down_payment_end", 1000000]
])


// function calculateMortgage(purchase_price_text, down_payment_text, mortgage_rate_text, mortgage_years_text) {
//     var purchase_price = parseFloat(purchase_price_text);
//     var down_payment = parseFloat(down_payment_text);
//     var mortgage_rate_pre = parseFloat(mortgage_rate_text);
//     var mortgage_rate = mortgage_rate_pre / 100;
//     var mortgage_years = parseFloat(mortgage_years_text);
//
//     var start1 = parseFloat(mortgage_rate / 12);
//     var start2 = parseFloat(start1 + 1);
//     var start3 = parseFloat(mortgage_years * 12);
//     var start4 = parseFloat(start2 ** (-1 * start3));
//     var start5 = parseFloat(1 - start4);
//     var start6 = parseFloat(start1 / start5);
//     var ending = parseFloat(start6 * (purchase_price - down_payment));
//     var rounded_ending = ending.round(2);
//
//     return rounded_ending;
// }
//
// function calculateMonthlyCashOutflow(monthly_mortgage_text, annual_tax_text, monthly_utilities_text, monthly_maintenance_text, annual_insurance_text) {
//     var tax_annual = parseFloat(annual_tax_text);
//     var tax_monthly = tax_annual / 12;
//     var utilities_monthly = parseFloat(monthly_utilities_text);
//     var maintenance_monthly = parseFloat(monthly_maintenance_text);
//     var insurance_annual = parseFloat(annual_insurance_text);
//     var insurance_monthly = insurance_annual / 12;
//     var monthly_mortgage = parseFloat(monthly_mortgage_text);
//     var monthly_cashflow = monthly_mortgage + tax_monthly + utilities_monthly + maintenance_monthly + insurance_monthly;
//
//     return monthly_cashflow.round(2);
// }

function calculateMortgage(purchase_price, down_payment, mortgage_rate_pre, mortgage_years) {
    var mortgage_rate = mortgage_rate_pre / 100;

    var start1 = (mortgage_rate / 12);
    var start2 = (start1 + 1);
    var start3 = (mortgage_years * 12);
    var start4 = (start2 ** (-1 * start3));
    var start5 = (1 - start4);
    var start6 = (start1 / start5);
    var ending = (start6 * (purchase_price - down_payment));
    var rounded_ending = ending.round(2);

    return rounded_ending;
}

function calculateMonthlyCashOutflow(monthly_mortgage, annual_tax, monthly_utilities, monthly_maintenance, annual_insurance) {
    var monthly_tax = annual_tax / 12;
    var monthly_insurance = annual_insurance / 12;
    var monthly_cashflow = monthly_mortgage + monthly_tax + monthly_utilities + monthly_maintenance + monthly_insurance;
    return monthly_cashflow.round(2);
}

function getPurchasePrice() {
    var purchase_price_text = document.getElementById("pPrice").value;

    return parseFloat(purchase_price_text);
}

function getDownPayment() {
    var down_payment_text = document.getElementById("dPayment").value;

    return parseFloat(down_payment_text);
}

function getMortgageRate() {
    var mortgage_rate_text = document.getElementById("mRate").value;

    return parseFloat(mortgage_rate_text);
}

function getMortgageYears() {
    var mortgage_years_text = document.getElementById("mYears").value;

    return parseFloat(mortgage_years_text);
}

function getAnnualTax() {
    var annual_tax_text = document.getElementById("tax").value;

    return parseFloat(annual_tax_text);
}

function getMonthlyUtil() {
    var monthly_utilities_text = document.getElementById("utilities").value;

    return parseFloat(monthly_utilities_text);
}

function getMonthlyMaint() {
    var monthly_maintenance_text = document.getElementById("maintenance").value;

    return parseFloat(monthly_maintenance_text);
}

function getAnnualInsurance() {
    var annual_insurance_text = document.getElementById("insurance").value;

    return parseFloat(annual_insurance_text);
}

function addFields() {
    var example = document.getElementById("example");

    while (example.hasChildNodes()) {
        example.removeChild(example.lastChild);
    }


    $("#example").append("<p id='example'> When your purchase price is <span data-var='purchase_price_text' class='TKAdjustableNumber' data-min='0' data-max='1500000' data-format='dollarsWithCommas'></span>, and your down payment is <span data-var='down_payment_text' class='TKAdjustableNumber' data-min='-10000' data-max='100000' data-format='dollarsWithCommas'></span>, and your mortgage rate is <span data-var='mortgage_rate_text' class='TKAdjustableNumber' data-min='1.0' data-max='10.0' data-format='percent' data-step='0.01'></span>, and the term of your mortgage is <span data-var='mortgage_years_text' class='TKAdjustableNumber' data-min='5' data-max='20'></span> years, your monthly mortgage will be <b>$<span data-var='monthly_mortgage_text'></span></b>. Your monthly cash flow dependent on an annual tax of <span data-var='annual_tax_text' class='TKAdjustableNumber' data-min='-10000' data-max='1000000' data-format='dollarsWithCommas'></span>, monthly utilities cost of <span data-var='monthly_utilities_text' class='TKAdjustableNumber' data-min='0' data-max='10000' data-format='dollarsWithCommas'></span>, monthly maintenance cost of <span data-var='monthly_maintenance_text' class='TKAdjustableNumber' data-min='0' data-max='10000' data-format='dollarsWithCommas'></span>, and an annual insurance cost of <span data-var='annual_insurance_text' class='TKAdjustableNumber' data-min='-10000' data-max='1000000' data-format='dollarsWithCommas'></span> would be: <b>$<span data-var='monthly_cashflow_text'></span></b> </p>");


    example.appendChild(document.createElement(setUpTangle()));
}

function setUpTangle() {
    var one = document.getElementById("example_1_content");
    one.style.display = "none";
    var two = document.getElementById("example_2_content");
    two.style.display = "none";
    var three = document.getElementById("example_3_content");
    three.style.display = "none";
    var element_cash_flow = document.getElementById("cash_flow");
    element_cash_flow.style.display = "none";
    var four = document.getElementById("example_4_content");
    four.style.display = "none";
    var five = document.getElementById("example_5_content");
    five.style.display = "none";
    var six = document.getElementById("example_6_content");
    six.style.display = "none";

    var element1 = document.getElementById("example1");
    var tangle = new Tangle(element1, {
        initialize: function () {
            this.cookies = 3;
        },
        update: function () {
            this.calories = (this.cookies * 50).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    });
    var element2 = document.getElementById("example2");
    var tangle = new Tangle(element2, {
        initialize: function () {
            this.save_amount = 5;
            this.saving_days = 10;
        },
        update: function () {
            this.monthly_savings_result = (this.save_amount * this.saving_days).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    });
    var element4 = document.getElementById("example4");
    var tangle = new Tangle(element4, {
        initialize: function () {
            this.goal_for_month = 1230;
            this.savings_sofar = 500;
        },
        update: function () {
            var width = Math.round((this.savings_sofar / this.goal_for_month) * 100);
            Tangle.classes.StretchyBar.update(document.getElementById("myBar"), width);
        }
    });
    var element = document.getElementById("example");
    var tangle = new Tangle(element, {
        initialize: function () {
            /*
            this.purchase_price_text = getPurchasePrice();
            this.down_payment_text = getDownPayment();
            this.mortgage_rate_text = getMortgageRate();
            this.mortgage_years_text = getMortgageYears();
            this.annual_tax_text = getAnnualTax();
            this.monthly_utilities_text = getMonthlyUtil();
            this.monthly_maintenance_text = getMonthlyMaint();
            this.annual_insurance_text = getAnnualInsurance();
            */


            this.purchase_price_2 = 300000;
            this.down_payment_2 = 60000;
            this.mortgage_rate_2 = 6.50;
            this.mortgage_years_2 = 15;
            this.annual_tax_2 = 8000;
            this.monthly_utilities_2 = 800;
            this.monthly_maintenance_2 = 500;
            this.annual_insurance_2 = 1000;

        },
        update: function () {
            /*
            this.monthly_mortgage_text = calculateMortgage(this.purchase_price_text, this.down_payment_text, this.mortgage_rate_text, this.mortgage_years_text);
            this.monthly_cashflow_text = calculateMonthlyCashOutflow(this.monthly_mortgage_text, this.annual_tax_text, this.monthly_utilities_text, this.monthly_maintenance_text, this.annual_insurance_text);
            */

            this.monthly_mortgage_2 = calculateMortgage(this.purchase_price_2, this.down_payment_2, this.mortgage_rate_2, this.mortgage_years_2)
            this.monthly_cashflow_2 = calculateMonthlyCashOutflow(this.monthly_mortgage_2, this.annual_tax_2, this.monthly_utilities_2, this.monthly_maintenance_2, this.annual_insurance_2)
        }
    });
    var element5 = document.getElementById("example_5_content");
    var tangle = new Tangle(element5, {
        initialize: function () {
            this.multiplier = 1;
            console.log('Initialized example 5');
        },
        update: function () {
            el = element5.getElementsByTagName("canvas")[0];
            var canvasWidth = el.get("width");
            var canvasHeight = el.get("height");
            var ctx = el.getContext("2d");


            ctx.fillStyle = "#fff";
            ctx.fillRect(0, 0, canvasWidth, canvasHeight);

            ctx.fillStyle = "#555";
            for (var x = 0; x < canvasWidth; x++) {
                var y = Math.exp(this.multiplier*0.01*x);
                ctx.fillRect(x, canvasHeight - y, 1, y);
            }
        }
    });
    var element6 = document.getElementById("example_6_content");
    var tangle = new Tangle(element6, {
        update_string_texts: function () {
            this.purchase_price_text = this.purchase_price.toString()//.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            this.down_payment_text = this.down_payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            this.mortgage_rate_text = this.mortgage_rate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            this.mortgage_years_text = this.mortgage_years.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            this.annual_tax_text = this.annual_tax.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            this.monthly_utilities_text = this.monthly_utilities.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            this.monthly_maintenance_text = this.monthly_maintenance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            this.annual_insurance_text = this.annual_insurance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        initialize: function () {
            this.purchase_price = 300000;
            this.down_payment = 60000;
            this.mortgage_rate = 6.50;
            this.mortgage_years = 15;
            this.annual_tax = 8000;
            this.monthly_utilities = 800;
            this.monthly_maintenance = 500;
            this.annual_insurance = 1000;
            this.update_string_texts();
        },
        update: function () {
            // Tangle already removes the commas before giving us the string. If only it provided a way to use data-format for
            // TKNumberInput field as well!
            // All of these text->float and float->text conversions will be eliminated if we can find a way to add formatters for
            // TKNumberField (which it doesn't have currently because it has its own update() method).
            console.log("All Params text: ", typeof (this.purchase_price_text), this.down_payment_text,
                this.mortgage_rate_text, this.mortgage_years_text, this.annual_tax_text,
                this.monthly_utilities_text, this.monthly_maintenance_text, this.annual_insurance_text)
            // this.purchase_price = parseFloat(this.purchase_price_text.replaceAll(',',''));
            // this.down_payment = parseFloat(this.down_payment_text.replaceAll(',',''));
            // this.mortgage_rate = parseFloat(this.mortgage_rate_text); // mortgage_rate is TKAdjustableNumber and is updated by Tangle
            // this.mortgage_years = parseFloat(this.mortgage_years_text); // mortgage_years is TKAdjustableNumber and is updated by Tangle
            // this.annual_tax = parseFloat(this.annual_tax_text.replaceAll(',',''));
            // this.monthly_utilities = parseFloat(this.monthly_utilities_text.replaceAll(',',''));
            // this.monthly_maintenance = parseFloat(this.monthly_maintenance_text.replaceAll(',',''));
            // this.annual_insurance = parseFloat(this.annual_insurance_text.replaceAll(',',''));
            this.monthly_mortgage = calculateMortgage(this.purchase_price, this.down_payment,
                this.mortgage_rate, this.mortgage_years);
            this.monthly_mortgage_text = this.monthly_mortgage
                .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            this.monthly_cashflow = calculateMonthlyCashOutflow(this.monthly_mortgage, this.annual_tax,
                this.monthly_utilities, this.monthly_maintenance, this.annual_insurance);
            this.monthly_cashflow_text = this.monthly_cashflow
                .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            console.log("monthly_mortgage: ", this.monthly_mortgage);
            console.log("monthly_cashflow: ", this.monthly_cashflow);
            console.log("monthly_mortgage_params", this.purchase_price, this.down_payment,
                this.mortgage_rate, this.mortgage_years);
            console.log("monthly_mortgage_params_text", this.purchase_price_text,
                this.down_payment_text, this.mortgage_rate_text, this.mortgage_years_text);

            var el = element6.getElementsByTagName("canvas")[0];
            var canvasWidth = el.get("width");
            var canvasHeight = el.get("height");
            var ctx = el.getContext("2d");

            ctx.fillStyle = "#fff";
            ctx.fillRect(0, 0, canvasWidth, canvasHeight);

            // Mortgage Rate
            ctx.fillStyle = "#555";
            var x_param_start = 0;
            var x_param_end = 12;
            var y_param_start = 0;
            var y_param_end = 10000;
            for (var x = 0; x < canvasWidth; x++) {
                var x_param = (x_param_end - x_param_start) / canvasWidth * x;
                var y_param = calculateMonthlyCashOutflow(calculateMortgage(this.purchase_price, this.down_payment, x_param, this.mortgage_years),
                    this.annual_tax, this.monthly_utilities, this.monthly_maintenance, this.annual_insurance);
                var y = canvasHeight * y_param / (y_param_end - y_param_start);
                ctx.fillRect(x, canvasHeight - y, 1, y);
            }
            // Mark the current value
            var current_x = canvasWidth * parseFloat(this.mortgage_rate) / (x_param_end - x_param_start);
            var current_y = canvasHeight * this.monthly_cashflow / (y_param_end - y_param_start);
            ctx.fillStyle = "#00f";
            ctx.fillRect(current_x, canvasHeight - current_y, 1, current_y);
            ctx.fillRect(0, canvasHeight - current_y, canvasWidth, 1);
            ctx.fillStyle = "#000";
            ctx.strokeText(this.monthly_cashflow.toString(), 0, canvasHeight - current_y)
            ctx.strokeText(this.mortgage_rate.toString(), current_x, canvasHeight);

            var el = element6.getElementsByTagName("canvas")[1];
            var canvasWidth = el.get("width");
            var canvasHeight = el.get("height");
            var ctx = el.getContext("2d");

            ctx.fillStyle = "#fff";
            ctx.fillRect(0, 0, canvasWidth, canvasHeight);

            // Purchase Price
            ctx.fillStyle = "#555";
            var x_param_start = 0;
            var x_param_end = 1000000;
            var y_param_start = 0;
            var y_param_end = 10000;
            for (var x = 0; x < canvasWidth; x++) {
                var x_param = (x_param_end - x_param_start) / canvasWidth * x;
                var y_param = calculateMonthlyCashOutflow(calculateMortgage(x_param, this.down_payment, this.mortgage_rate, this.mortgage_years),
                    this.annual_tax, this.monthly_utilities, this.monthly_maintenance, this.annual_insurance);
                var y = canvasHeight * y_param / (y_param_end - y_param_start);
                ctx.fillRect(x, canvasHeight - y, 1, y);
            }
            // Mark the current value
            var current_x = canvasWidth * parseFloat(this.purchase_price) / (x_param_end - x_param_start);
            var current_y = canvasHeight * this.monthly_cashflow / (y_param_end - y_param_start);
            ctx.fillStyle = "#00f";
            ctx.fillRect(current_x, canvasHeight - current_y, 1, current_y);
            ctx.fillRect(0, canvasHeight - current_y, canvasWidth, 1);
            ctx.fillStyle = "#000";
            ctx.strokeText(this.monthly_cashflow.toString(), 0, canvasHeight - current_y)
            ctx.strokeText(this.purchase_price.toString(), current_x, canvasHeight);


            var el = element6.getElementsByTagName("canvas")[2];
            var canvasWidth = el.get("width");
            var canvasHeight = el.get("height");
            var ctx = el.getContext("2d");

            ctx.fillStyle = "#fff";
            ctx.fillRect(0, 0, canvasWidth, canvasHeight);

            // Down Payment
            ctx.fillStyle = "#555";
            var x_param_start = 0;
            var x_param_end = 1000000;
            var y_param_start = 0;
            var y_param_end = 10000;
            for (var x = 0; x < canvasWidth; x++) {
                var x_param = (x_param_end - x_param_start) / canvasWidth * x;
                var y_param = calculateMonthlyCashOutflow(calculateMortgage(this.purchase_price, x_param, this.mortgage_rate, this.mortgage_years),
                    this.annual_tax, this.monthly_utilities, this.monthly_maintenance, this.annual_insurance);
                var y = canvasHeight * y_param / (y_param_end - y_param_start);
                ctx.fillRect(x, canvasHeight - y, 1, y);
            }
            // Mark the current value
            var current_x = canvasWidth * parseFloat(this.down_payment) / (x_param_end - x_param_start);
            var current_y = canvasHeight * this.monthly_cashflow / (y_param_end - y_param_start);
            ctx.fillStyle = "#00f";
            ctx.fillRect(current_x, canvasHeight - current_y, 1, current_y);
            ctx.fillRect(0, canvasHeight - current_y, canvasWidth, 1);
            ctx.fillStyle = "#000";
            ctx.strokeText(this.monthly_cashflow.toString(), 0, canvasHeight - current_y)
            ctx.strokeText(this.down_payment.toString(), current_x, canvasHeight);

        }
    });
}

//----------------------------------------------------------
//
//  FilterKnob
//

Tangle.classes.Knob = {

    initialize: function (el, options, tangle, xParameter) {
        console.log("Initialize knob")
        var index = xParameter.substr(xParameter.length - 1);
        var yParameter = "monthly_cashflow";
        var xBounds = { min:limits.get(xParameter+"_start"), max:limits.get(xParameter+"_end") };
        var yBounds = { min:0, max:10000 };

        function getXforMortgageRate(mortgage_rate) {
            return canvasWidth * (mortgage_rate - xBounds.min) / (xBounds.max - xBounds.min);
        }

        function getMortgageRateForX(x) {
            return x * (xBounds.max - xBounds.min) / canvasWidth;
        }


        // view

        el.setStyles({position:"absolute", left:0, top:0});

        var canvasEl = el.getParent().getElement("canvas");
        var canvasWidth = canvasEl.get("width");
        var canvasHeight = canvasEl.get("height");

        var lineStyle = "position:relative; display:block; border-left:1px dotted #00f; pointer-events:none; width:1px; height:" + canvasHeight + "px;";
        var lineEl = new Element("div", { style:lineStyle });
        el.grab(lineEl, "bottom");

        var knobStyle = "position:relative; display:none; ";
        var knobWidth = 15, knobHeight = 15;
        var knobEl = new Element("img", { style:knobStyle, src:"Images/FilterParamsKnob.png", width:knobWidth, height:knobHeight });
        el.grab(knobEl, "bottom");

        var helpEl = new Element("div", { "class": "FilterKnobHelp" });
        helpEl.set("text", "drag");
        el.grab(helpEl, "bottom");

        var knobX, knobY;

        this.update = function (el, xValue) {
            knobX = Math.round(getXforMortgageRate(xValue));
            knobY = -20;
            knobEl.setStyles( { left:knobX - knobWidth/2, top:knobY - knobHeight/2 } );
            lineEl.setStyles( { left:knobX });
            helpEl.setStyles( { left:knobX - knobWidth/2 - 22, top:knobY - knobHeight/2 + 8 } );
        };


        // rollover effects

        var isShowing = false;
        var isHovering = false;

        canvasEl.addEvent("mouseenter", function () { isShowing = true;   updateRolloverEffects(); });
        canvasEl.addEvent("mouseleave", function () { isShowing = false;  updateRolloverEffects(); });
        knobEl.addEvent("mouseenter", function () { isHovering = true;   updateRolloverEffects(); });
        knobEl.addEvent("mouseleave", function () { isHovering = false;  updateRolloverEffects(); });

        function updateRolloverEffects () {
            updateCursor();
            var isShowingKnob = (isShowing || isHovering || isDragging);
            knobEl.setStyle("display", isShowingKnob ? "block" : "none");
            helpEl.setStyle("display", (isShowingKnob && !didDrag) ? "block" : "none");
        }

        function updateCursor () {
            var body = document.getElement("body");
            if (isHovering || isDragging) { body.addClass("cursorDrag"); }
            else { body.removeClass("cursorDrag"); }
        }

        function updateDynamicLabelsShowing () {
            // tangle.element.getElements(".showOnDrag").each( function (hideEl) {
            //     hideEl.setStyle("display", isDragging ? "block" : "none");
            // });
            // tangle.element.getElement(".filterSidebar").setStyle("display", isDragging ? "none" : "block");
        }


        // drag

        var isDragging = false;
        var didDrag = false;
        var knobXAtMouseDown, knobYAtMouseDown;

        new BVTouchable(knobEl, {

            touchDidGoDown: function (touches) {
                knobXAtMouseDown = knobX;
                knobYAtMouseDown = knobY;
                isDragging = true;
                didDrag = true;
                knobEl.set("src", "Images/FilterParamsKnobDrag.png");
                updateRolloverEffects();
                updateDynamicLabelsShowing();
                tangle.setValue("index", index);
            },

            touchDidMove: function (touches) {
                var obj = { };

                var newX = knobXAtMouseDown + touches.translation.x;
                var new_monthly_mortgage = newX / canvasWidth * (xBounds.max - xBounds.min) + xBounds.min;
                obj[xParameter] = new_monthly_mortgage.limit(xBounds.min, xBounds.max);
                tangle.setValues(obj);
                var new_monthly_cashflow = calculateMonthlyCashOutflow(calculateMortgage(
                        tangle.getValue("purchase_price"),
                        tangle.getValue("down_payment"),
                        tangle.getValue("mortgage_rate"),
                        tangle.getValue("mortgage_years")
                    ),
                    tangle.getValue("annual_tax"),
                    tangle.getValue("monthly_utilities"),
                    tangle.getValue("monthly_maintenance"),
                    tangle.getValue("annual_insurance")
                )
                obj = { };
                obj[yParameter] = new_monthly_cashflow.limit(yBounds.min, yBounds.max);
                console.log("newX", newX, canvasWidth)
                console.log("new_monthly_mortgage ", new_monthly_mortgage);
                console.log("new_monthly_cashflow", new_monthly_cashflow)
                tangle.setValues(obj);
                console.log("new_values", tangle.getValue("mortgage_rate"), tangle.getValue("monthly_cashflow"));
            },

            touchDidGoUp: function (touches) {
                isDragging = false;
                knobEl.set("src", "Images/FilterParamsKnob.png");
                helpEl.setStyle("display", "none");
                updateRolloverEffects();
                updateDynamicLabelsShowing();
            }
        });
    }
};

function showExample1() {
    var x = document.getElementById("example_1_content");
    if (x.style.display === "none") {
        $(x).fadeIn("slow");
    } else {
        $(x).fadeOut("slow");
    }
}

function showExample2() {
    var x = document.getElementById("example_2_content");
    if (x.style.display === "none") {
        $(x).fadeIn("slow");
    } else {
        $(x).fadeOut("slow");
    }
}

function showExample3() {
    var x = document.getElementById("example_3_content");
    if (x.style.display === "none") {
        $(x).fadeIn("slow");
    } else {
        $(x).fadeOut("slow");
    }
}

function showCashFlow() {
    var x = document.getElementById("cash_flow");
    if (x.style.display === "none") {
        $(x).fadeIn("slow");
    } else {
        $(x).fadeOut("slow");
    }
}

function showExample4() {
    var x = document.getElementById("example_4_content");
    if (x.style.display === "none") {
        $(x).fadeIn("slow");
    } else {
        $(x).fadeOut("slow");
    }
}

function showExample5() {
    var x = document.getElementById("example_5_content");
    if(x.style.display === "none") {
        $(x).fadeIn("slow");
    } else {
        $(x).fadeOut("slow");
    }
}

function showExample6() {
    var x = document.getElementById("example_6_content");
    if(x.style.display === "none") {
        $(x).fadeIn("slow");
    } else {
        $(x).fadeOut("slow");
    }
}

// Tab switch functions
$(document).ready(function (){
    console.log("Reaching ready");
    $(".tabs-list li a").click(function (e) {
        e.preventDefault();
    });
    $(".tabs-list li").click(function (){
        var tabid = $(this).find("a").attr("href");
        $(".tabs-list li, .tabs div.tab").removeClass("active");
        $(".tab").hide();
        $(tabid).show();
        $(this).addClass("active");
    })
});