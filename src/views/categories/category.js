import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <>
      <table className="table table-bordered table-hover">
          <thead>
              <tr>
                  <th>No</th>
                  <th>Category Name</th>
                  <th>Image</th>
                  <th>Action</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>1</td>
                  <td>Thời Trang Nam</td>
                  <td>Hình ảnh</td>
                  <td>
                    <Link className="btn btn-warning">Update</Link> | 
                    <Link className="btn btn-danger"> Delete</Link>
                  </td>
              </tr>
              <tr>
                  <td>1</td>
                  <td>Thời Trang Nam</td>
                  <td>Hình ảnh</td>
                  <td>
                    <Link className="btn btn-warning">Update</Link> | 
                    <Link className="btn btn-danger"> Delete</Link>
                  </td>
              </tr>
              <tr>
                  <td>1</td>
                  <td>Thời Trang Nam</td>
                  <td>Hình ảnh</td>
                  <td>
                    <Link className="btn btn-warning">Update</Link> | 
                    <Link className="btn btn-danger"> Delete</Link>
                  </td>
              </tr>
              <tr>
                  <td>1</td>
                  <td>Thời Trang Nam</td>
                  <td>Hình ảnh</td>
                  <td>
                    <Link className="btn btn-warning">Update</Link> | 
                    <Link className="btn btn-danger"> Delete</Link>
                  </td>
              </tr>
              <tr>
                  <td>1</td>
                  <td>Thời Trang Nam</td>
                  <td>Hình ảnh</td>
                  <td>
                    <Link className="btn btn-warning">Update</Link> | 
                    <Link className="btn btn-danger"> Delete</Link>
                  </td>
              </tr>
          </tbody>
      </table>
    </>
  )
}

export default Category
