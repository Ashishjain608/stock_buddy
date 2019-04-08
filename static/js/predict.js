// This file deals with the prediction of stocks using normal linear regression.
// Created two datasets, datapoints_x and datapoints_y



    let datapoints_x = [];
    let datapoints_y = [];

    for(let i = 0; i < 970; i++) {
        datapoints_x.push(i);
    }
    for(let i = 0; i < 970; i++) {
        datapoints_y.push(Math.random());
    }

    const xs = tf.tensor1d(datapoints_x);
    const ys = tf.tensor1d(datapoints_y);

    const xmin = xs.min();
    const xmax = xs.max();
    const xrange = xmax.sub(xmin);

    xsNorm = norm(xs)
    ysNorm = norm(ys)

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
            const predsYs = predict(xsNorm);
            const e = loss(predsYs, ysNorm);
            errors.push(e.dataSync())
            return e
        });
    }

    console.log("errs [0]" + errors[0])
    console.log(errors[numIterations - 1])

    xTest = tf.tensor1d([0.1, 0.2, 0.3, 0.4, 974])
    predict(xTest).print()

    a.print()
    b.print()
    
    function loss(predictions, labels) {
        return predictions.sub(labels).square().mean();
    }
    
    function predict(x) {
        return tf.tidy(() => {
            return a.mul(x).add(b)
        });
    }
    function norm(x) {
        return x.sub(xmin).div(xrange);
    }