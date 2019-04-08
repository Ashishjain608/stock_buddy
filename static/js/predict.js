// This file deals with the prediction of stocks using normal linear regression.
// Created two datasets, datapoints_x and datapoints_y

function predictions(dps, dps_length) {

    let datapoints_x = [];
    let datapoints_y = [];
    let pred = []

    for(let i = 0; i < dps_length; i++) {
        datapoints_x.push(dps[i].x);
    }
    for(let i = 0; i < dps_length; i++) {
        datapoints_y.push(dps[i].y);
    }

    let index = dps_length;
    pred.push({
        x: dps[index-1].x, y: dps[index-1].y
    });
    
    let vals_to_pred = [];
    for(let i = index; i < index + 10; i++) {
        vals_to_pred.push(i);
    }

    const xs = tf.tensor1d(datapoints_x);
    const ys = tf.tensor1d(datapoints_y);

    const xmin = xs.min();
    const xmax = xs.max();
    const xrange = xmax.sub(xmin);

    xsNorm = norm(xs, xmin, xrange)
    ysNorm = norm(ys, xmin, xrange)

    const a = tf.variable(tf.scalar(Math.random()));
    const b = tf.variable(tf.scalar(Math.random()));

    a.print()
    b.print()

    //train the model
    const learningRate = 0.001;
    const optimizer = tf.train.sgd(learningRate);

    const numIterations = 800;
    const errors = [];

    for (let iter = 0; iter < numIterations; iter++) {
        optimizer.minimize(() => {
            const predsYs = predict(xsNorm, a, b);
            const e = loss(predsYs, ysNorm);
            errors.push(e.dataSync())
            return e
        });
    }

    console.log("errs [0]" + errors[0])
    console.log(errors[numIterations - 1])

    xTest = tf.tensor1d(vals_to_pred)
    const predicted_vals = predict(xTest, a, b)
    predicted_vals.print()
    const values_returned = Array.from(predicted_vals.dataSync());
    for(let i = index; i < index+10; i++ ) {
        pred.push({
            x: i, y: values_returned[i - dps_length]
        });
    }
    a.print()
    b.print()
    return pred;
   
}

    
    
    function loss(predictions, labels) {
        return predictions.sub(labels).square().mean();
    }
    
    function predict(x, a, b) {
        return tf.tidy(() => {
            return a.mul(x).add(b)
        });
    }
    function norm(x, xmin, xrange) {
        return x.sub(xmin).div(xrange);
    }