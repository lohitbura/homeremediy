import {Circles} from 'react-loader-spinner';

const CommonAlertLoader = () => {
  return (
    <div className='commonAlertLoaderLayout' onClick={(e)=>{
            e.stopPropagation();
    }}>
            <div className='commonAlertLoader'>
<Circles
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
            </div>
    </div>
  )
}

export default CommonAlertLoader
    