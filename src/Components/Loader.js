import loadSymbol from '../loadSymbol.gif'

function Loader({endPage}){
    return (
        <div>
          <img src={loadSymbol} alt="loading" ref={endPage}/>
        </div>
    )
}

export default Loader