function TitleBar() {
  return (
    <div>
<div className="bg-secondary d-flex flex-row mb-3 m-3" >

<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Items Numbers
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">1</a></li>
    <li><a class="dropdown-item" href="#">2</a></li>
    <li><a class="dropdown-item" href="#">3</a></li>
  </ul>
</div>
<div class="input-group me-2 ">
  <input type="text" class="form-control" placeholder="Product Title" aria-label=""/>
</div>
<div class="input-group me-2 ">
  <input type="text" class="form-control" placeholder="Item Count" aria-label=""/>&nbsp;&nbsp;&nbsp;
</div>

<div class="input-group me-2 ">
  <input type="text" class="form-control" placeholder="Unit Price" aria-label=""/>&nbsp;&nbsp;&nbsp;
</div>
<form className="d-flex me-2">
        <button className="btn btn-primary px-4">Add</button>
        &nbsp;&nbsp;&nbsp;
        <button className="btn btn-success px-3">Cancel</button> &nbsp;&nbsp;&nbsp;
      </form>

</div>

        
    </div>
  );
}

export default TitleBar;
