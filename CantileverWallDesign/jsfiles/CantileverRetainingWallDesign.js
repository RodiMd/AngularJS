//begingin of module to calculate the sum of heights
angular.module ('crwdCalculator', [])
    .controller('Controller', function($scope){
        $scope.sumHeight = function(){
            var h1 = $scope.height.h1;
            var h2 = $scope.height.h2;
            var h3 = $scope.height.h3;
            //precondition, h1, h2 & h1 >= 0 and is numeric
            //postcondition, sumHeight >= 0
            if(h3<0 || isNaN(h3) || h2<0 || isNaN(h2) || h1<0 || isNaN(h1)){
                sumHeight = "non-numeric or negative values are invalid";
                return sumHeight;
            }else{
                sumHeight = h1 + h2 + h3;
                return Number(sumHeight).toFixed(2) + " ft";
            }
        };
        
        //function to calculcate the Rankin pressure
        $scope.rankinActivePressure = function(){
            //angleArea5 = aA5
            var aA5 = $scope.angleArea5.aA5;
            // sFriction1 = sFi1
            var sFi1 = $scope.sFriction1;
            var sD1 = $scope.sDensity1;
            //precondition, sD1 >= 0 and is numeric, 0 > aA5 > 25 and is numeric, 28 =< sFi1 =< 40 and is numeric 
            //poscondition, rankinActivePressure >= 0, 1 > rankinActiveCoef > 0
            
            //Note, must create an array for angle and soil friction angles to obtain the rankin coefficient
                if (sD1 < 0 || isNaN(sD1) || aA5 < 0 || aA5 > 25 || isNaN(aA5) || sFi1 < 28 || sFi1 > 40 || isNaN(sFi1)){
                    rankinActivePressure = "non-numeric or negative values are invalid";
                    return rankinActivePressure;
                }else{
                    aA5 = Math.cos($scope.angleArea5.aA5 * Math.PI/180);
                    sFi1 = Math.cos($scope.sFriction1 * Math.PI/180);
                    var rankinActiveCoef = aA5 * ((aA5 - Math.sqrt(Math.pow(aA5,2) - Math.pow(sFi1,2)))/(aA5 + Math.sqrt(Math.pow(aA5,2) - Math.pow(sFi1,2))));
                    rankinActivePressure = 0.5 * sD1 * sumHeight * sumHeight * rankinActiveCoef;
                    return Number(rankinActivePressure).toFixed(2) + " lb/ft"; 
                }
        };
        //function to calculate the Rankin vertical pressure
        $scope.rankinVerticalPressure = function(){
            //precondition, 0 < angle < 90
            //postcondition, rankinVerticalPressure >= 0
            var angle = $scope.angleArea5.aA5;
            if (angle < 0 || angle > 90){
                rankinVerticalPressure = "invalid angle value, must be > 0 and < 90";
                return rankinVerticalPressure;
            }else {
                angleArea5 = angle * Math.PI/180;
                rankinVerticalPressure = rankinActivePressure * Math.sin(angleArea5);
                return Number(rankinVerticalPressure).toFixed(0) + " lb/ft";
            }
        };
        //function to calculate the horizontal Rankin pressure
        $scope.rankinHorizontalPressure = function(){
            //precondition, 0 < angle < 90
            //postcondition, rankinVerticalPressure >= 0
            var angle = $scope.angleArea5.aA5;
            if (angle < 0 || angle > 90){
                rankinHorizontalPressure = "invalid angle value, must be > 0 and < 90";
                return rankinHorizontalPressure;
            }else{
                angle = angle * Math.PI/180;
                rankinHorizontalPressure = rankinActivePressure * Math.cos(angle);
                return Number(rankinHorizontalPressure).toFixed(2) + " lb/ft";
            }
        };
        //function to calculate area 1
        $scope.area1 = function(){
            //precondition widthArea1 >= 0 and is numeric, height2 >= 0 and is numeric
            //postcondition, area >= 0
            var widthArea1 = $scope.widthArea1.wA1;
            var height2 = $scope.height.h2;
            if (widthArea1 < 0 || isNaN(widthArea1) || height2 < 0 || isNaN(height2)){
                area1 = "non-numeric or negative values are invalid";
                return area1;
            }else{
                area1 = widthArea1 * height2;
                return Number(area1).toFixed(2) + " sq.ft";
            }
        };
        //function to calculate area 2
        $scope.area2 = function(){
            //precondition, widthArea2 >= 0 and is numeric, height2 >= 0 and is numeric
            //postcondition, area2 >= 0
            var widthArea2 = $scope.widthArea2.wA2;
            var height2 = $scope.height.h2;
            if (widthArea2 < 0 || isNaN(widthArea2) || height2 < 0 || isNaN(height2)){
                area2 = "non-numeric or negative values are invalid";
                return area2;
            }else{
                area2 = 0.5 * widthArea2 * height2;
                return Number(area2).toFixed(2) + " sq.ft";
            }
        };
        //function to calculate area 3
        $scope.area3 = function(){
            //precondition, widthArea3 >= 0 and is numeric, height3 >= 0 and is numeric
            //postcondition, area3 >= 0
            var widthArea3 = $scope.widthArea3.wA3;
            var height3 = $scope.height.h3;
            if(widthArea3 < 0 || isNaN(widthArea3) || height3 < 0 || isNaN(height3)){
                area3 = "non-numeric or negative values are invalid";
                return area3;
            }else{
                area3 = widthArea3 * height3;
                return Number(area3).toFixed(2) + " sq.ft";
            }
        };
        //function to calculate area 4
        $scope.area4 = function(){
            //precondition, widthArea4 >= 0 and is numeric, height2 >= 0 and is numeric
            //postcondition, area4 >= 0
            var widthArea4 = $scope.widthArea4.wA4;
            var height2 = $scope.height.h2;
            if (widthArea4 < 0 || isNaN(widthArea4) || height2 < 0 || isNaN(height2)){
                area4 = "non-numeric or negative values are invalid";
                return area4;
            }else{
                area4 = widthArea4 * height2;
                return Number(area4).toFixed(2) + " sq.ft";    
            }
        };
        //function to calculate area 5
        $scope.area5 = function(){
            //precondition, widthArea4 >= 0 and is numeric, height1 >= 0 and is numeric
            //precondition, area5 >= 0
            var widthArea4 = $scope.widthArea4.wA4;
            var height1 = $scope.height.h1;
            if (widthArea4 < 0 || isNaN(widthArea4) || height1 < 0 || isNaN(height1)){
                area5 = "non-numeric or negative values are invalid";
                return area5;
            }else{
                area5 = 0.5 * widthArea4 * height1;
                return Number(area5).toFixed(2) + " sq.ft";
            }
        };
        //function to calculate Weight per unit length
        $scope.weightPUnitLength1 = function(){
            //precondition, wDensity >= 0 and is numeric, area1 >= 0 and is numeric
            //postcondition, weightPUnitLength1 >= 0 and is numeric
            var wDensity = $scope.wDensity;
            if (wDensity < 0 || isNaN(wDensity) || area1 < 0 || isNaN(area1)){
                weightPUnitLength1 = "non-numeric or negative values are invalid";
                return weightPUnitLength1;
            }else {
                weightPUnitLength1 = area1 * wDensity;
                return Number(weightPUnitLength1).toFixed(2) + " lb/ft";
            }
        };
        $scope.weightPUnitLength2 = function(){
            //precondition, wDensity >= 0 and is numeric, area2 >= 0 and is numeric
            //postcondition, weightPUnitLength2 >= 0 and is numeric
            var wDensity = $scope.wDensity;
            if (wDensity < 0 || isNaN(wDensity) || area2 < 0 || isNaN(area2)){
                weightPUnitLength2 = "non-numeric or negative values are invalid";
                return weightPUnitLength2;
            }else{
                weightPUnitLength2 = area2 * wDensity;
                return Number(weightPUnitLength2).toFixed(2) + " lb/ft";                
            }
        };
        $scope.weightPUnitLength3 = function(){
            //precondition, wDensity >= 0 and is numeric, area3 >= 0 and is numeric
            //postcondition, weightPUnitLength3 >= 0 and is numeric
            var wDensity = $scope.wDensity;
            if (wDensity < 0 || isNaN(wDensity) || area3 < 0 || isNaN(area3)){
                weightPUnitLength3 = "non-numeric or negative values are invalid";
                return weightPUnitLength3;
            }else{
                weightPUnitLength3 = area3 * wDensity;
                return Number(weightPUnitLength3).toFixed(2) + " lb/ft";   
            }
        };
        $scope.weightPUnitLength4 = function(){
            //precondition, wDensity >= 0 and is numeric, area4 >= 0 and is numeric
            //postcondition, weightPUnitLength4 >= 0 and is numeric
            var sDensity1 = $scope.sDensity1;
            if(sDensity1 < 0 || isNaN(sDensity1) || area4 < 0 || isNaN(area4)){
                weightPUnitLength4 = "non-numeric or negative values are invalid";
                return weightPUnitLength4;
            }else{
                weightPUnitLength4 = area4 * sDensity1;
                return Number(weightPUnitLength4).toFixed(2) + " lb/ft";
            }
        };
        $scope.weightPUnitLength5 = function(){
            //precondition, wDensity >= 0 and is numeric, area5 >= 0 and is numeric
            //postcondition, weightPUnitLength5 >= 0 and is numeric
            var sDensity1 = $scope.sDensity1;
            if (sDensity1 < 0 || isNaN(sDensity1) || area5 < 0 || isNaN(area5)){
                weightPUnitLength5 = "non-numeric or negative values are invalid";
                return weightPUnitLength5;
            }else{
                weightPUnitLength5 = area5 * sDensity1;
                return Number(weightPUnitLength5).toFixed(2) + " lb/ft";
            }
        };
        //function to calculate the moment arm acting on point C the bottom left corner of the retaining wall
        $scope.momentArm1 = function(){
            //precondition, wArea(3,4,1) >= 0 and is numeric, 
            //postcondition, momentArm1 >= 0 and is numeric
            var wArea3 = $scope.widthArea3.wA3;
            var wArea4 = $scope.widthArea4.wA4;
            var wArea1 = $scope.widthArea1.wA1;
            if(wArea3 < 0 || isNaN(wArea3) || wArea4 < 0 || isNaN(wArea4) || wArea1 < 0 || isNaN(wArea1)){
                momentArm1 = "non-numeric or negative values are invalid";
                return momentArm1;
            }else{
                momentArm1 = wArea3 - wArea4 - 0.5 * wArea1;
                return Number(momentArm1).toFixed(2) + " ft";
            }
        };
        $scope.momentArm2 = function(){
            //precondition, wArea(3,4,1,2) >= 0 and is numeric, 
            //postcondition, momentArm2 >= 0 and is numeric
            var wArea3 = $scope.widthArea3.wA3;
            var wArea4 = $scope.widthArea4.wA4;
            var wArea1 = $scope.widthArea1.wA1;
            var wArea2 = $scope.widthArea2.wA2;
            if (wArea3 < 0 || isNaN(wArea3) || wArea4 < 0 || isNaN(wArea4) || wArea1 < 0 || isNaN(wArea1) || wArea2 < 0 || isNaN(wArea2)){
                momentArm2 = "non-numeric or negative values are invalid";
                return momentArm2;
            }else{
                momentArm2 = wArea3 - wArea4 - wArea1 - wArea2 + (2/3) * wArea2;
                return Number(momentArm2).toFixed(2) + " ft";   
            }
        };
        $scope.momentArm3 = function(){
            //precondition, wArea(3) >= 0 and is numeric, 
            //postcondition, momentArm3 >= 0 and is numeric
            var wArea3 = $scope.widthArea3.wA3;
            if(wArea3 < 0 || isNaN(wArea3)){
                momentArm3 = "non-numeric or negative values are invalid";
                return momentArm3;
            }else{
                momentArm3 = wArea3 / 2;
                return Number(momentArm3).toFixed(2); 
            }
        };
        $scope.momentArm4 = function(){
            //precondition, wArea(3,4) >= 0 and is numeric, 
            //postcondition, momentArm4 >= 0 and is numeric
            var wArea4 = $scope.widthArea4.wA4;
            var wArea3 = $scope.widthArea3.wA3;
            if(wArea4 < 0 || isNaN(wArea4) || wArea3 < 0 || isNaN(wArea3)){
                momentArm4 = "non-numeric or negative values are invalid";
                return momentArm4;
            }else{
                momentArm4 = wArea3 - wArea4/2;
                return Number(momentArm4).toFixed(2);    
            }
        };
        //function to calculate momet arm of area five, however, area5 = area4 width therefore, the last term uses area4
        //instead of area 5.
        $scope.momentArm5 = function(){
            //precondition, wArea(3,4) >= 0 and is numeric, 
            //postcondition, momentArm5 >= 0 and is numeric
            var wArea3 = $scope.widthArea3.wA3;
            var wArea4 = $scope.widthArea4.wA4;
            if(wArea3 < 0 || isNaN(wArea3) || wArea4 < 0 || isNaN(wArea4)){
                momentArm5 = "non-numeric or negative values are invalid";
                return momentArm5;
            }else{
                momentArm5 = wArea3 - wArea4 + (2/3) * wArea4;
                return Number(momentArm5).toFixed(2);
            }
        };
        //function to calculat the moment resisting overturning by each area of the retaining wall and the the soil above the
        //retaining wall resting on it
        $scope.moment1 = function(){
            //precondition, weightPUnitLength1 >= 0 and is numeric, momentArm1 >= 0 and is numeric
            //postcondition, moment1 >= 0 and is numeric
            if(weightPUnitLength1 < 0 || isNaN(weightPUnitLength1) || momentArm1 < 0 || isNaN(momentArm1)){
                moment1 = "non-numeric or negative values are invalid";
                return moment1;
            }else{
                moment1 = weightPUnitLength1 * momentArm1;
                return Number(moment1).toFixed(2);
            }
        };
        $scope.moment2 = function(){
            //precondition, weightPUnitLength2 >= 0 and is numeric, momentArm2 >= 0 and is numeric
            //postcondition, moment2 >= 0 and is numeric
            if(weightPUnitLength2 < 0 || isNaN(weightPUnitLength2) || momentArm2 < 0 || isNaN(momentArm2)){
                moment2 = "non-numeric or negative values are invalid";
                return moment2;
            }else{
                moment2 = weightPUnitLength2 * momentArm2;
            return Number(moment2).toFixed(2);
            }
        };
        $scope.moment3 = function(){
            //precondition, weightPUnitLength3 >= 0 and is numeric, momentArm3 >= 0 and is numeric
            //postcondition, moment3 >= 0 and is numeric
            if(weightPUnitLength3 < 0 || isNaN(weightPUnitLength3) || momentArm3 < 0 || isNaN(momentArm3)){
                moment3 = "non-numeric or negative values are invalid";
                return moment3;
            }else{
                moment3 = weightPUnitLength3 * momentArm3;
                return Number(moment3).toFixed(2);
            }
        };
        $scope.moment4 = function(){
            //precondition, weightPUnitLength4 >= 0 and is numeric, momentArm4 >= 0 and is numeric
            //postcondition, moment4 >= 0 and is numeric
            if(momentArm4 < 0 || isNaN(momentArm4) || weightPUnitLength4 < 0 || isNaN(weightPUnitLength4)){
                moment4 = "non-numeric or negative values are invalid";
                return moment4;
            }else{
                moment4 = weightPUnitLength4 * momentArm4;
                return Number(moment4).toFixed(2);
            }
        };
        $scope.moment5 = function(){
            //precondition, weightPUnitLength5 >= 0 and is numeric, momentArm5 >= 0 and is numeric
            //postcondition, moment5 >= 0 and is numeric
            if(momentArm5 < 0 || isNaN(momentArm5) || weightPUnitLength5 < 0 || isNaN(weightPUnitLength5)){
                moment5 = "non-numeric or negative values are invalid";
                return momentm5;
            }else{
                moment5 = weightPUnitLength5 * momentArm5;
                return Number(moment5).toFixed(2);
            }
        };
        //function to calculate the resisting moment by the vertial rankin force
        $scope.momentByPv = function(){
            //precondition, wArea3 >= 0 and is numeric, rankingVerticalPressure>= 0 and is numeric
            //postcondition, momentByPv >= 0 and is numeric
            var wArea3 = $scope.widthArea3.wA3;
            if(wArea3 < 0 || isNaN(wArea3) || rankinVerticalPressure < 0 || isNaN(rankinVerticalPressure)){
                momentByPv = "non-numeric or negative values are invalid";
                return momentByPv;
            }else{
                momentByPv = rankinVerticalPressure * wArea3;
                return Number(momentByPv).toFixed(2);  
            }
        };
        //function to add all the weight per unit length by the wall and the soil resting on the wall
        $scope.sumRankinVerticalPressure = function (){
            //precondition, wPUL(1-5) >= 0 and is numeric, rVP >= 0 and is numeric
            //postcondition, sumRankingVerticalPressure >= 0 and is numeric
            var wPUL1 = weightPUnitLength1;
            var wPUL2 = weightPUnitLength2;
            var wPUL3 = weightPUnitLength3;
            var wPUL4 = weightPUnitLength4;
            var wPUL5 = weightPUnitLength5;
            var rVP = rankinVerticalPressure;
            
            if(wPUL1 < 0 || isNaN(wPUL1) || wPUL2 < 0 || isNaN(wPUL2) || wPUL3 < 0 || isNaN(wPUL3) || wPUL4 < 0 || isNaN(wPUL4) || wPUL5 < 0 || isNaN(wPUL5) || rVP < 0 || isNaN(rVP)){
                sumRankinVerticalPressure = "non-numeric or negative values are invalid";
                return sumRankinVerticalPressure;
            }else{
                sumRankinVerticalPressure = wPUL1 + wPUL2 + wPUL3 + wPUL4 + wPUL5 + rVP;
                return Number(sumRankinVerticalPressure).toFixed(2);   
            }
        };
        //function to add all the resiting moments for overturning
        $scope.sumMoment = function(){
            //percondition, moment(1-5) >= 0 and is numeric
            //postcondition, sumMoment >= 0 and is numeric
            if(moment1 < 0 || isNaN(moment1) || moment2 < 0 || isNaN(moment2) || moment3 < 0 || isNaN(moment3) || moment4 < 0 || isNaN(moment4) || moment5 < 0 || isNaN(moment5)){
                sumMomemnt = "non-numeric or negative values are invalid";
                return sumMoment;
            }else{
                sumMoment = moment1 + moment2 + moment3 + moment4 + moment5 + momentByPv;
                return Number(sumMoment).toFixed(2);    
            }
        };
        //function to calculate the overturning moment by the horizontal rankin force.
        $scope.overturningMoment = function(){
            //precondition, rankingHorizontalPressure >= 0 and is numeric, sumHeight >= 0 and is numeric
            //postcondition, overturningMoment >= 0 and is numeric
            if(rankinHorizontalPressure < 0 || isNaN(rankinHorizontalPressure) || sumHeight < 0 || isNaN(sumHeight)){
                overturningMoment = "non-numeric or negative values are invalid";
                return overturningMoment;
            }else{
                overturningMoment = rankinHorizontalPressure * (1/3) * sumHeight;
                return Number(overturningMoment).toFixed(2);    
            }
        };
        //function to calculate the overturning factor of safety, the FS must be greater than 2
        $scope.overturningFacotrSafety = function(){
            //precondition, sumMoment >= 0 and is numeric, oerturning > 0 and is numeric
            //postcondition, overturningMoment >= 0 and is numeric
            if(sumMoment < 0 || isNaN(sumMoment) || overturningMoment <= 0 || isNaN(overturningMoment)){
                overturningFactorSafety = "non-numeric, negative values, and zero denominator are invalid";
                return overturningFactorSafety;
            }else{
                overturningFactorSafety = sumMoment/overturningMoment;
                //precondition, overturningFactorSafety >= 2, postcondition, overturningFactorSafety = OK
                //precondition, overturningFactorSafety < 2, postcondition, overturningFactorSafety = redesign needed
                if (overturningFactorSafety >= 2){
                    return Number(overturningFactorSafety).toFixed(2) + " >/= 2, OK"; 
                }else if (overturningFactorSafety < 2){
                    return Number(overturningFactorSafety).toFixed(2) +  " < 2, Redesign is needed";
                }
            }
        };
        //function to calculate the sliding factor of safety, the FS must be greater than 1.5
        //although naming convension throughout the code is different due to conditionals and large number of variables
        //it seems only feasible to have a more difficult naming convension to reduce width of page
        $scope.slidingFactorSafety = function(){
            var sF2 = $scope.sFriction2;
            var c2 = $scope.sCohesion2;
            var h4 = $scope.height.h4;
            var sD = $scope.sDensity2;
            //rankinPassiveCoef = rPC
            var rPC = Math.pow(Math.tan(((45+(sF2/2))) * Math.PI/180),2);
            //rankinPassivePressure = rPP
            var rPP = 0.5 * rPC * sD * Math.pow((h4),2) + 2 * c2 * Math.sqrt(rPC) * h4;
            //rankinActiveCoef2 = rAC2
            var rAC2 = (2/3);
            var sFi2 = rAC2 * sF2 * (Math.PI/180);
            var wA3 = $scope.widthArea3.wA3;
            var sRVP = sumRankinVerticalPressure * (Math.tan(sFi2));
            var rHP = rankinHorizontalPressure;
            
            //precondition, (sRVP, wA3, rAC2, c2, rPP) >= 0 and is numeric, rHP > 0 and is numeric
            //postcondition, slidingFactorSafety >= 0 and is numeric
            if(sRVP < 0 || isNaN(sRVP) || wA3 < 0 || isNaN(wA3) || rAC2 < 0 || isNaN(rAC2) || c2 < 0 || isNaN(c2) || rPP < 0 || isNaN(rPP) || rHP <= 0 || isNaN(rHP)){
                slidingFactorSafety = "non-numeric, negative values, and zero denominator are invalid";
                return slidingFactorSafety;
            }else{
                slidingFactorSafety = (sRVP + (wA3 * rAC2 * c2) + rPP)/(rHP);
                //precondition if slidingFactorSafety >= 1.5, postcondition = ok
                //precondition if slidingFactorSafety < 1.5, postcondition = redesign is needed
                if (slidingFactorSafety >= 1.5){
                    return Number(slidingFactorSafety).toFixed(2) + ">/= 1.5, OK";
                }else if(slidingFactorSafety < 1.5){
                    return Number(slidingFactorSafety).toFixed(2) + "< 1.5, Redesign is needed";
                }
            }
        };
        //function to calculate bearing capacity, the FS must be greater than 3
        $scope.bearingCapacityFactorSafety = function(){
            
            var wA3 = $scope.widthArea3.wA3;
            var h4 = $scope.height.h4;
            var sD2 = $scope.sDensity2;
            var sF2 = $scope.sFriction2;
            var sC2 = $scope.sCohesion2;
            // eccentricity = e
            var e = wA3/2 - ((sumMoment-overturningMoment)/sumRankinVerticalPressure);
            // pressure at toe = pToe
            var pToe = sumRankinVerticalPressure/wA3 - (1 + (6 * e/wA3));
            // pressure at heel = pHeel
            var pHeel = sumRankinVerticalPressure/wA3 - (1 - (6 * e/wA3));
            // bearingCapacityNq = bCNq
            var bCNq = Math.pow(Math.tan((45+ sF2/2)*Math.PI/180),2);
            // bearingCapacityNc = bCNc
            var bCNc = (bCNq - 1) * (1/(Math.tan(sF2 * Math.PI/180)));
            // bearingCapacityNg = bCNg
            var bCNg = 2 * (bCNq + 1) * Math.tan(sF2 * Math.PI/180);
            // ultimateBearingCapacityQu = uBCQu
            var uBCQu = sC2 * bCNc + sD2 * h4 * bCNq + 0.5 * sD2 * (wA3 - 2 * e) * bCNg;

            //precondition, pToe > pHeel, pToe > 0 or pHeel > pToe, pHeel > 0, (wA3, h4, sD2, sF2, and sC2) >= 0 and is numeric
            //postcondition, bearingCapacityFactorSafety >= 0
            if(wA3 < 0 || isNaN(wA3) || h4 < 0 || isNaN(h4) || sD2 < 0 || isNaN(sD2) || sF2 < 0 || isNaN(sF2) || sC2 < 0 || isNaN(sC2)){
                bearingCapacityFactorSafety = "non-numeric, negative values, and zero denominator are invalid";
                return bearingCapacityFactorSafety;
            
            }else if(pToe > pHeel && pToe > 0 && !isNaN(pToe)){
                bearingCapacityFactorSafety = uBCQu/pToe;
                //precondition, bearingCapacityFactorSafety >= 3
                //postcondition, design is ok, otherwise, must Redesign
                if(bearingCapacityFactorSafety >= 3){
                    return Number(bearingCapacityFactorSafety).toFixed(2) + " >= 3, OK";
                }else{
                    return Number(bearingCapacityFactorSafety).toFixed(2) + " < 3, Redesign is needed";
                }
                
            }else if(pHeel > pToe && pHeel > 0 && !isNaN(pHeel)){
                bearingCapacityFactorSafety = uBCQu/pHeel;
                //precondition, bearingCapacityFactorSafety >= 3
                //postcondition, design is ok, otherwise, must Redesign
                if(bearingCapacityFactorSafety >= 3){
                    return Number(bearingCapacityFactorSafety).toFixed(2) + " >= 3, OK";
                }else{
                    return Number(bearingCapacityFactorSafety).toFixed(2) + " < 3, Redesign is needed";         
                }
            }
        };
    });