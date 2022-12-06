/* eslint-disable no-undef */
Feature('Like and unLike the Restaurants');

Scenario('Like the Restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.wait(4);
  I.seeElement('#tombolDetail');
  I.click('#tombolDetail');
  I.wait(4);
  I.amOnPage('/#/detail');
  I.wait(4);
  I.seeElement('#loveButtonElement');
  I.click('#loveButtonElement');

  const label = await I.grabAttributeFrom('button', 'aria-label');
  console.log(label);

  if (label.includes('unlike restaurant')) {
    console.log('Unlike Restaurant');
  } else if (label.includes('like restaurant')) {
    console.log('Like Restaurant');
  }

  I.wait(4);
  I.seeElement('#favorite');
  I.click('#favorite');
  I.wait(4);
  I.seeElement('#listRestaurantFavorite');
  I.see('Lihat Detail');
});

Scenario('unLike the Restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.wait(3);
  I.seeElement('#tombolDetail');
  I.click('#tombolDetail');
  I.wait(4);
  I.amOnPage('/#/detail');
  I.wait(7);
  I.seeElement('#loveButtonElement');
  I.click('#loveButtonElement');
  I.wait(5);
  I.click('#loveButtonElement');

  const label = await I.grabAttributeFrom('button', 'aria-label');
  console.log(label);

  if (label.includes('unlike restaurant')) {
    console.log('Unlike Restaurant');
  } else if (label.includes('like restaurant')) {
    console.log('Like Restaurant');
  }

  I.wait(7);
  I.seeElement('#favorite');
  I.wait(4);
  I.click('#favorite');
  I.wait(7);
  I.seeElement('#listRestaurantFavorite');
  I.wait(4);
  I.dontSee('Lihat Detail');
});
