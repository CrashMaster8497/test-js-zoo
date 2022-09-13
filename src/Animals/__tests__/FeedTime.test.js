import { describe, expect, it } from '@jest/globals';
import FeedTime from '../FeedTime';

describe('FeedTime', () => {
    it('should be able to create feedtime', () => {
        const time = new Date(Date.now());
        //const feedByZooKeeper = new ZooKeeper()
        const feedTime = new FeedTime(time /*, feedByZooKeeper*/);

        expect(feedTime).toBeDefined();
        expect(feedTime).not.toBeNull();

        expect(feedTime.time).toEqual(time);
        //expect(feedTime.feedByZooKeeper).toEqual(feedByZooKeeper);
    });
});
