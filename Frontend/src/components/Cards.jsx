import React from 'react'

const Cards = ({item}) => {
    console.log(item);
  return (
    <>
     <div className='mt-4 my-3 p-3'>
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img
    //   src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-info">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline p-3">${item.price}</div>
      <div className="badge badge-outline p-3 hover:bg-blue-500 hover:text-white duration-200">Buy Now</div>
    </div>
  </div>
</div>

     </div>
    </>
  )
}

export default Cards