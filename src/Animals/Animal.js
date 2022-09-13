import FeedTime from './FeedTime';

export default class Animal {
    constructor(id, feedSchedule, feedTimes, isSick) {
        this.id = id || 0;
        this.feedSchedule = feedSchedule || [];
        this.feedTimes = feedTimes || [];
        this.isSick = isSick || false;

        this.requiredSpaceSqFt = null;
        this.favoriteFood = null;
    }

    addFeedSchedule = (feedSchedule) => {
        this.feedSchedule.push(...feedSchedule);
    };

    feed = () => {
        let canFeed = false;

        if (this.feedTimes.length < 2) {
            canFeed = true;
        } else {
            let nextTime = this.feedTimes[this.feedTimes.length - 2].time;
            nextTime.setDate(nextTime.getDate() + 1);
            if (nextTime <= Date.now()) {
                canFeed = true;
            }
        }

        if (canFeed) {
            this.feedTimes.push(new FeedTime(new Date(Date.now())));
        }
    };

    heal = () => {
        this.isSick = false;
    };

    isFriendlyWith = () => null;
}
