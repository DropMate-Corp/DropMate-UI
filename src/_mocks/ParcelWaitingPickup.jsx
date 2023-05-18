import { faker } from '@faker-js/faker';

const ParcelsWaitingPickup = [...Array(10)].map((_, index) => {
    const parcel = {
        id: faker.number.int(),
        weight: faker.number.float(),
        store_name: faker.company.name(),
        delivery_date: faker.date.future().toString(),
    };

    return parcel;
});

export { ParcelsWaitingPickup };