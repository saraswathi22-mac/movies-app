import React from 'react';

const Entertainment = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const { id, name } = menuItem;
        return (
          <article key={id} className='menu-item'>
            {/* <img src={img} alt={name} className='photo' /> */}
            <div className='item-info'>
              <header>
                <h4>{name}</h4>
                <h4 className='price'>${name}</h4>
              </header>
              <p className='item-text'>{name}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Entertainment;
