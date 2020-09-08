import React from 'react'
import { Link } from 'react-router-dom'

const Add_Category = () => {
  return (
    <>
      
      <form >
          <legend>Thêm mới danh mục sản phẩm</legend>
      
          <div className="form-group">
              <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  <label>Name</label>
              </div>
              <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                  <input 
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Nhập tên danh mục" />
              </div>
          </div>
          <div className="form-group">
              <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  <label>Hình ảnh</label>
              </div>
              <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                  <input 
                  type="file" 
                  name="image"
                  className="form-control" />
              </div>
          </div>
          <button type="submit" className="btn btn-success">Gửi</button>
      </form>
      
    </>
  )
}

export default Add_Category
