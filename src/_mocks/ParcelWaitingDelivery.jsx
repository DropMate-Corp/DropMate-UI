import { faker } from '@faker-js/faker';

const ParcelsWaitingDelivery = [...Array(10)].map((_, index) => {
    const parcel = {
        id: faker.number.int(),
        weight: faker.number.float(),
        store_name: faker.company.name(),
    };

    return parcel;
});

export { ParcelsWaitingDelivery };