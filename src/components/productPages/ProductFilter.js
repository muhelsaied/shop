import React from 'react'
import styled from 'styled-components'
import { ProductConsumer } from '../../context'

export default function ProductFilter() {
  return (
    <ProductConsumer>
      {
        value => {
          const { search ,
                  price, 
                  minPrice, 
                  maxPrice, 
                  company, 
                  shipping, 
                  handleSearchChange, 
                  storeProducts 
                } = value;
                /////////// set data-structure 
                let companies = new Set()
                companies.add('all')
                for (let product in storeProducts ){
                  companies.add(storeProducts[product]['company'])
                }
                companies = [...companies]
                // console.log(companies)

          return ( 
          <div className='row my-5'>
            <div className='col-10 mx-auto text-muted'>
            <SearchWrapper>
              
                {/* text search  */}
                <div>
                <label htmlFor='searchproducts'>search products</label>
                <input type='text' name= 'search' id = 'searchproducts' 
                  onChange={handleSearchChange}
                  value={search}
                  className='filter-search'/>
                  </div>
                  {/* end text search  */}

                {/* company selector  */}
                <div>
                <label htmlFor='selectCompany'>categary</label>
                <select name='company' id='selectCompany'
                  className='filter-search'
                  onChange={handleSearchChange}
                  value={company}>
                  {/* <option value='all'>all</option> */}
                   {
                     companies.map( (name, index) => (
                      <option key={index} value={name} >{name}</option> 
                      ))
                   }
                  </select>
                </div>
                {/* end of categary */}

                {/* price range */}
                <div>
                  <label htmlFor='priceRange'>
                    <p className='mb-0'>product price : 
                    <span>$ {price}</span></p>
                  </label>
                  <input type='range' name='price' id ='priceRange' min = {minPrice}
                    max = {maxPrice}
                    className='filter-price'
                    value={price}
                    onChange = {handleSearchChange}/>
                </div>
                {/* end of categary */}


                {/* free shipping */}
                <div>
                  <label htmlFor="shipping" className="mx-2">
                    free shipping
                  </label>
                  <input
                    type="checkbox"
                    name="shipping"
                    id="shipping"
                    onChange={handleSearchChange}
                    checked={shipping && true}
                  />
                </div>
                {/* end free shipping */}

            </SearchWrapper>
            </div>
          </div>
          )
        }
        }
    </ProductConsumer>
  )
};


const SearchWrapper = styled.div`
  display:grid;
  grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  text-align:center;
  label {
    font-weight: bold;
    text-transform: capitalize;
  }
  .filter-search{
    background:var(--backColor);
  }
  .filter-search,
  .filter-price {
    display: block;
    width: 100%;
    outline:none !important;
    border-radius: 0.5rem;
    border: 2px solid var(--darkGrey);
    height:20px !important;
    text-align:center !important;    
  }
  /* range style */
  input[type=range] {
  -webkit-appearance: none;
  /* margin: 10px 0; */
  width: 100%;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 4px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000;
  background: #AC51B5;
  border-radius: 6px;
  border: 0px solid #000101;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 0px 0px 1px #000000;
  border: 0px solid #000000;
  height: 12px;
  width: 24px;
  border-radius: 50px;
  background: #65001C;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -4px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #AC51B5;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 4px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000;
  background: #AC51B5;
  border-radius: 6px;
  border: 0px solid #000101;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 0px 0px 1px #000000;
  border: 0px solid #000000;
  height: 12px;
  width: 24px;
  border-radius: 50px;
  background: #65001C;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 4px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #AC51B5;
  border: 0px solid #000101;
  border-radius: 12px;
  box-shadow: 0px 0px 0px #000000;
}
input[type=range]::-ms-fill-upper {
  background: #AC51B5;
  border: 0px solid #000101;
  border-radius: 12px;
  box-shadow: 0px 0px 0px #000000;
}
input[type=range]::-ms-thumb {
  margin-top: 1px;
  box-shadow: 0px 0px 1px #000000;
  border: 0px solid #000000;
  height: 12px;
  width: 24px;
  border-radius: 50px;
  background: #65001C;
  cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
  background: #AC51B5;
}
input[type=range]:focus::-ms-fill-upper {
  background: #AC51B5;
}


`

// // /* check box */
// .toggle{
//   position: relative;
//   display: block;
//   width: 40px;
//   height: 20px;
//   cursor: pointer;
//   -webkit-tap-highlight-color: transparent;
//   transform: translate3d(0,0,0);
// }
// .toggle:before{
//     content: "";
//     position: relative;
//     top: 3px;
//     left: 3px;
//     width: 34px;
//     height: 14px;
//     display: block;
//     background: var(--primaryColor);
//     border-radius: 8px;
//     transition: background .2s ease;
// }
//   span{
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 20px;
//     height: 20px;
//     display: block;
//     background: white;
//     border-radius: 10px;
//     box-shadow: 0 3px 8px rgba(var(--primaryColor),.5)
//     transition: all .2s ease;
//   }
//     span:before{
//       content: "";
//       position: absolute;
//       display: block;
//       margin: -18px;
//       width: 56px;
//       height: 56px;
//       background: rgba(var(--mainGrey),.5);
//       border-radius: 50%;
//       transform: scale(0);
//       opacity: 1;
//       pointer-events: none;
//     }

// #freeShipping:checked + .toggle
// :before{
//     background: var(--main-grey);
//     }
//   span{
//     background: var(--main-grey);
//     transform: translateX(20px);
//     transition: all .2s cubic-bezier(.8,.4,.3,1.25), background .15s ease;
//     box-shadow: 0 3px 8px rgba($primary,.2);
//     }
//     span:before{
//       transform: scale(1);
//       opacity: 0;
//       transition: all .4s ease;
//       } */