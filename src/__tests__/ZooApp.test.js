import { describe, expect, it } from '@jest/globals';
import Zoo from '../Zoo';
import ZooApp from '../ZooApp';

describe('ZooApp', () => {
    it('should be able to create zoo app', () => {
        const zooApp = new ZooApp();

        expect(zooApp).toBeDefined();
        expect(zooApp).not.toBeNull();

        expect(zooApp.zoos).toEqual([]);
    });

    it('should be able to add zoo', () => {
        const zooApp = new ZooApp();

        const zoo = new Zoo();

        zooApp.addZoo(zoo);

        expect(zooApp.zoos).toHaveLength(1);
        expect(zooApp.zoos).toContain(zoo);
    });
});
