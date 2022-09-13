export default class Animal {
    constructor(id, feedSchedule, feedTimes, isSick) {
        this.id = id;
        this.feedSchedule = feedSchedule;
        this.feedTimes = feedTimes;
        this.isSick = isSick;

        this.requiredSpaceSqFt = null;
        this.favoriteFood = null;
    }
}
