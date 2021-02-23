function distanceFromHqInBlocks(pickup){
    return Math.abs(pickup - 42)
}

function distanceFromHqInFeet(pickup){
    return distanceFromHqInBlocks(pickup) * 264
}

function distanceTravelledInFeet(pickup, dropoff){
    return Math.abs(pickup - dropoff) * 264
}

function calculatesFarePrice(pickup, dropoff){
    if (distanceTravelledInFeet(pickup, dropoff) > 2500){
        return "cannot travel that far"
    }
    else if (distanceTravelledInFeet(pickup, dropoff) < 400) {
        return 0
    }
    else if (distanceTravelledInFeet(pickup, dropoff) <= 2000){
        return (distanceTravelledInFeet(pickup,dropoff) - 400) * 0.02
    }
   
    else {
        return 25
    }
}