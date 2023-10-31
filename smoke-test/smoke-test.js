const chai = require('chai');
const expect = chai.expect;

const {
  getAllItems,
  createItem,
  getItemById,
  updateItem,
  deleteItem,
} = require('../controllers/ControllerOfItems');

describe('Items Controller Smoke Test', () => {
  let itemId;

  it('Create Item', async () => {
    const newItemData = {
      /* Define the data for creating a new item */
    };
    const createdItem = await createItem(newItemData);

    expect(createdItem).to.exist;
    expect(createdItem).to.have.property('id');
    itemId = createdItem.id;
  });

  it('Get Item by ID', async () => {
    const retrievedItem = await getItemById(itemId);

    expect(retrievedItem).to.exist;
    expect(retrievedItem.id).to.equal(itemId);
  });

  it('Update Item', async () => {
    const updatedItemData = {
      /* Define the updated data for the item */
    };
    const updatedItem = await updateItem(itemId, updatedItemData);

    expect(updatedItem).to.exist;
    expect(updatedItem.id).to.equal(itemId);
  });

  it('Delete Item', async () => {
    const deleteResult = await deleteItem(itemId);

    expect(deleteResult).to.be.true;
  });

  it('Get All Items', async () => {
    const allItems = await getAllItems();

    expect(allItems).to.be.an('array');
  });
});
