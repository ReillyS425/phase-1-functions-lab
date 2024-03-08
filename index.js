
function distanceFromHqInBlocks(pickupLo) {
    const scuberHQ = 42;
if (pickupLo >= scuberHQ) {
    return pickupLo - scuberHQ; 
}
else {
    return scuberHQ - pickupLo;
}
}

distanceFromHqInBlocks();

function distanceFromHqInFeet(pickupLo) {
    const blockLengthInFt = 264;
    return distanceFromHqInBlocks(pickupLo) * blockLengthInFt;

}
distanceFromHqInFeet();

function distanceTravelledInFeet(start, destination) {
    if (start >= destination) {
    return (start - destination) * 264; 
}
else 
{
    return (destination - start) * 264; 
}
}
distanceTravelledInFeet();

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400) {
        return 0;
    }
    else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    }
    else if (distance > 2000 && distance <= 2500) {
        return 25;
    }
    else if (distance > 2500) {
        return "cannot travel that far";
    }
}
calculatesFarePrice();