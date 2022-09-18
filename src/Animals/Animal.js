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

    feed = (zooKeeper) => {
        let canFeed = false;

        if (this.feedTimes.length >= 2) {
            const now = new Date();
            const time1 = this.feedTimes.at(-1).time;
            const time2 = this.feedTimes.at(-2).time;

            const nowDay = new Date(
                `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`
            );
            const time1Day = new Date(
                `${time1.getFullYear()}-${time1.getMonth()}-${time1.getDate()}`
            );
            const time2Day = new Date(
                `${time2.getFullYear()}-${time2.getMonth()}-${time2.getDate()}`
            );

            if (
                nowDay.valueOf() != time1Day.valueOf() ||
                nowDay.valueOf() != time2Day.valueOf()
            ) {
                canFeed = true;
            }
        } else {
            canFeed = true;
        }

        if (canFeed) {
            this.feedTimes.push(new FeedTime(new Date(), zooKeeper));
        }
    };

    heal = () => {
        this.isSick = false;
    };

    isFriendlyWith = () => null;
}
