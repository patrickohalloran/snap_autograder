var starter_path = "M4_W3_L1_T1_starter.xml";
// The id is to act as a course identifier.
// NOTE: FOR NOW YOU ALSO HAVE TO ADD THE ID TO THE BOTTOM OF THE PAGE.
var courseID = "BJC.4x";  // e.g. "BJCx"
// Specify a prerequisite task id, should be null if no such requirement.
var preReqTaskID = null;
var preReqID = courseID + preReqTaskID;
// taskID uniquely identifies the task for saving in browser sessionStorage.
var taskID = "_M4_W3_L4_T1";
var id = courseID + taskID;
var isEDX = isEDXurl();
// if this question is not meant to be graded, change this flag to false
var graded = true;
// to hide feedback for this problem, set this to false
var showFeedback = true;
// to allow ability to regrade certain tests, set this to true
var regradeOn = true;
function AGTest(outputLog) {
    var fb = new FeedbackLog(
        world,
        id,
        'Pandigital Numbers'
    );

    var blockName = "is % pandigital?";
    var chunk_1 = fb.newChunk('Complete the "' + blockName + '" block.');

    var blockExists_1 = function () {
        return spriteContainsBlock(blockName);
    }

    

    var tip_1_1 = chunk_1.newTip('Make sure you name your block exactly "' + blockName + '" and place it in the scripting area.',
        'The "' + blockName + '" block exists.');

    tip_1_1.newAssertTest(
        blockExists_1,
        'Testing if the "' + blockName + '" block is in the scripting area.',
        'The "' + blockName + '" block is in the scripting area.',
        'Make sure you name your block exactly "' + blockName + '" and place it in the scripting area.',
        1
    );


    var tip_1_2 = chunk_1.newTip(
        'Your block should return the correct values for the given general inputs.',
        'Great job! Your block reports the correct value for given inputs.'
    );

    var input_1_2_1 = [15432];
    tip_1_2.newIOTest('r',  // testClass
        blockName,          // blockSpec
        input_1_2_1,        // input
        function (output) {
            // Output should be a list of numbers.
            var expected,
                actual;
            console.log(output);

            expected = true;
            actual = output;
            if (!_.isEqual(actual, expected)) {
                tip_1_2.suggestion = 'The output should be ' + expected + ';';
                tip_1_2.suggestion += ' but was ' + actual + '.';
                return false;
            }
            return true;
        },
        4 * 1000, // 4 second time out.
        true, // is isolated
        1 // points
    );

    var input_1_2_2 = [11132];
    tip_1_2.newIOTest('r',  // testClass
        blockName,          // blockSpec
        input_1_2_2,        // input
        function (output) {
            // Output should be a list of numbers.
            var expected,
                actual;
            console.log(output);

            expected = false;
            actual = output;
            if (!_.isEqual(actual, expected)) {
                tip_1_2.suggestion = 'The output should be ' + expected + ';';
                tip_1_2.suggestion += ' but was ' + actual + '.';
                return false;
            }
            return true;
        },
        4 * 1000, // 4 second time out.
        true, // is isolated
        1 // points
    );

    var input_1_2_3 = [4123];
    tip_1_2.newIOTest('r',  // testClass
        blockName,          // blockSpec
        input_1_2_3,        // input
        function (output) {
            // Output should be a list of numbers.
            var expected,
                actual;
            console.log(output);

            expected = true;
            actual = output;
            if (!_.isEqual(actual, expected)) {
                tip_1_2.suggestion = 'The output should be ' + expected + ';';
                tip_1_2.suggestion += ' but was ' + actual + '.';
                return false;
            }
            return true;
        },
        4 * 1000, // 4 second time out.
        true, // is isolated
        1 // points
    );

    var mapString = "map % over %";
    var keepString = "keep items such that % from %";
    var combineString = "combine with % items of %";
    var useHOFS = function () {
        var hasMap = customBlockContains("is % pandigital?", "map % over %");
        var hasKeep = customBlockContains("is % pandigital?", "keep items such that % from %");
        var hasCombine = customBlockContains("is % pandigital?", "combine with % items of %");
        return hasMap || hasKeep || hasCombine;
    }
     var tip_1_3 = chunk_1.newTip('Try your best to use HOFs.',
        'Uses HOFs in the exercise.');

    tip_1_3.newAssertTest(
        useHOFS,
        'Testing if the "' + blockName + '" uses HOFs.',
        'The "' + blockName + '" block uses HOFs',
        'Make sure you try and use HOFs',
        1
    );








    var blockName_2 = "list all pandigital numbers between % and %";
    var chunk_2 = fb.newChunk('Complete the "' + blockName_2 + '" block.');

    var blockExists_2 = function () {
        return spriteContainsBlock(blockName_2);
    }

    var tip_2_1 = chunk_2.newTip('Make sure you name your block exactly "' + blockName_2 + '" and place it in the scripting area.',
        'The "' + blockName_2 + '" block exists.');

    tip_2_1.newAssertTest(
        blockExists_2,
        'Testing if the "' + blockName_2 + '" block is in the scripting area.',
        'The "' + blockName_2 + '" block is in the scripting area.',
        'Make sure you name your block exactly "' + blockName_2 + '" and place it in the scripting area.',
        1
    );

    var tip_2_2 = chunk_2.newTip(
        'Your block should return the correct values for the given general inputs.',
        'Great job! Your block reports the correct value for given inputs.'
    );

    var input_2_2_1 = [1, 135];
    tip_2_2.newIOTest('r',  // testClass
        blockName_2,          // blockSpec
        input_2_2_1,        // input
        function (output) {
            // Output should be a list of numbers.
            var expected,
                actual;
            console.log(output);

            expected = ["1", "12", "21", "123", "132"];
            if (output instanceof List) {
                actual = output.asArray();
            } else {
                actual = output;
            }
            for (i = 0; i < actual.length; i++)
            {
                actual[i] = actual[i] + ""; //turns into strings
            }
            if (!_.isEqual(actual, expected)) {
                tip_2_2.suggestion = 'The output should be ' + expected + ';';
                tip_2_2.suggestion += ' but was ' + actual + '.';
                return false;
            }
            return true;
        },
        4 * 1000, // 4 second time out.
        true, // is isolated
        1 // points
    );

    var input_2_2_2 = [1, 2];
    tip_2_2.newIOTest('r',  // testClass
        blockName_2,          // blockSpec
        input_2_2_2,        // input
        function (output) {
            // Output should be a list of numbers.
            var expected,
                actual;
            console.log(output);

            expected = ["1"];
            if (output instanceof List) {
                actual = output.asArray();
            } else {
                actual = output;
            }
            for (i = 0; i < actual.length; i++)
            {
                actual[i] = actual[i] + ""; //turns into strings
            }
            if (!_.isEqual(actual, expected)) {
                tip_2_2.suggestion = 'The output should be ' + expected + ';';
                tip_2_2.suggestion += ' but was ' + actual + '.';
                return false;
            }
            return true;
        },
        4 * 1000, // 4 second time out.
        true, // is isolated
        1 // points
    );

    var tip_2_3 = chunk_2.newTip(
        'Your block should return the correct values for the given edge case inputs.',
        'Great job! Your block reports the correct value for given inputs.'
    );

    var input_2_3_1 = [5, 7];
    tip_2_3.newIOTest('r',  // testClass
        blockName_2,          // blockSpec
        input_2_3_1,        // input
        function (output) {
            // Output should be a list of numbers.
            var expected,
                actual;
            console.log(output);

            expected = [];
            if (output instanceof List) {
                actual = output.asArray();
            } else {
                actual = output;
            }
            for (i = 0; i < actual.length; i++)
            {
                actual[i] = actual[i] + ""; //turns into strings
            }
            if (!_.isEqual(actual, expected)) {
                tip_2_3.suggestion = 'The output should be ' + expected + ';';
                tip_2_3.suggestion += ' but was ' + actual + '.';
                return false;
            }
            return true;
        },
        4 * 1000, // 4 second time out.
        true, // is isolated
        1 // points
    );







    // var blockName_3 = "display nicely %";
    // var chunk_3 = fb.newChunk('Complete the "' + blockName_3 + '" block.');

    // var blockExists_3 = function () {
    //     return spriteContainsBlock(blockName_3);
    // }

    // var tip_3_1 = chunk_3.newTip('Make sure you name your block exactly "' + blockName_3 + '" and place it in the scripting area.',
    //     'The "' + blockName_3 + '" block exists.');

    // tip_3_1.newAssertTest(
    //     blockExists_3,
    //     'Testing if the "' + blockName_3 + '" block is in the scripting area.',
    //     'The "' + blockName_3 + '" block is in the scripting area.',
    //     'Make sure you name your block exactly "' + blockName_3 + '" and place it in the scripting area.',
    //     1
    // );

    // var tip_3_2 = chunk_3.newTip(
    //     'Your block should return the correct values for the given general inputs.',
    //     'Great job! Your block reports the correct value for given inputs.'
    // );

    // var input_3_2_1 = [1, 5, 7, 10];
    // tip_3_2.newIOTest('r',  // testClass
    //     blockName_3,          // blockSpec
    //     input_3_2_1,        // input
    //     function (output) {
    //         // Output should be a list of numbers.
    //         var expected,
    //             actual;
    //         console.log(output);

    //         expected = "1, 5, 7, 10";
    //         actual = output;
    //         if (!_.isEqual(actual, expected)) {
    //             tip_3_2.suggestion = 'The output should be ' + expected + ';';
    //             tip_3_2.suggestion += ' but was ' + actual + '.';
    //             return false;
    //         }
    //         return true;
    //     },
    //     4 * 1000, // 4 second time out.
    //     true, // is isolated
    //     1 // points
    // );

    // var input_3_2_2 = [1];
    // tip_3_2.newIOTest('r',  // testClass
    //     blockName_3,          // blockSpec
    //     input_3_2_2,        // input
    //     function (output) {
    //         // Output should be a list of numbers.
    //         var expected,
    //             actual;
    //         console.log(output);

    //         expected = "1";
    //         actual = output;
    //         if (!_.isEqual(actual, expected)) {
    //             tip_3_2.suggestion = 'The output should be ' + expected + ';';
    //             tip_3_2.suggestion += ' but was ' + actual + '.';
    //             return false;
    //         }
    //         return true;
    //     },
    //     4 * 1000, // 4 second time out.
    //     true, // is isolated
    //     1 // points
    // );

    // var tip_3_3 = chunk_3.newTip(
    //     'Your block should return the correct values for the given edge case inputs.',
    //     'Great job! Your block reports the correct value for given inputs.'
    // );

    // var input_3_2_3 = [];
    // tip_3_3.newIOTest('r',  // testClass
    //     blockName_3,          // blockSpec
    //     input_3_2_3,        // input
    //     function (output) {
    //         // Output should be a list of numbers.
    //         var expected,
    //             actual;
    //         console.log(output);

    //         expected = "";
    //         actual = output;
    //         if (!_.isEqual(actual, expected)) {
    //             tip_3_3.suggestion = 'The output should be ' + expected + ';';
    //             tip_3_3.suggestion += ' but was ' + actual + '.';
    //             return false;
    //         }
    //         return true;
    //     },
    //     4 * 1000, // 4 second time out.
    //     true, // is isolated
    //     1 // points
    // );





    return fb;
}