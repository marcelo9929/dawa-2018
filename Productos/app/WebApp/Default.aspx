<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="WebApp.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<link href="styles.css" rel="stylesheet" />
    <title>Indice</title>
</head>
<body>
    <form id="form1" runat="server">
        <div class="container">
<br>
<div class="row">
    <div class="col-md-12">
        <div class="back" role="tabpanel">
            <ul class="nav nav-pills" role="tablist">
                <li role="presentation" class="active">
                    <a href="#section1" aria-controls="section1" data-toggle="tab" role="tab">Inicio</a>
                </li>
                <li role="presentation">
                    <a href="#section2" aria-controls="section2" data-toggle="tab" role="tab">Factura</a>
                </li>
                <li role="presentation">
                    <a href="#section3" aria-controls="section3" data-toggle="tab" role="tab">Producto</a>
                </li>
                <li role="presentation">
                        <a href="#section4" aria-controls="section4" data-toggle="tab" role="tab">Categoría</a>
                    </li>
            </ul>
            <!-- tabs content -->
            <div class="tab-content">
                <div role="tabpanel" class="tab-pane active" id="section1">
                    <h3>Section 1</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic expedita placeat animi labore deserunt 
                        eveniet atque nulla nostrum cupiditate at odio, magni quibusdam quam cum. Ad vitae velit non aliquid.</p>
                </div>
                <div role="tabpanel" class="tab-pane" id="section2">
                    <h3>Section 2</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic expedita placeat animi labore deserunt 
                        eveniet atque nulla nostrum cupiditate at odio, magni quibusdam quam cum. Ad vitae velit non aliquid.</p>
                </div>
                <div role="tabpanel" class="tab-pane" id="section3">
                    <center> <h2>PRODUCTO</h2></center>
                    <div class="row">
                        <div class="col-md-8">
                         
                        <form class="form-horizontal">
                            <div class="form-group">
                                <label class="control-label col-sm-2" for="name">Nombre:</label>
                                <div class="col-sm-10">
                                    <asp:TextBox CssClass="form-control" ID="name" runat="server" placeholder="Ingresa el nombre"></asp:TextBox>
                                </div>
                            </div><br /><br />
                            <div class="form-group">
                                <label class="control-label col-sm-2" for="price">Precio:</label>
                                <div class="col-sm-10">
                                <asp:TextBox CssClass="form-control" ID="price" runat="server" placeholder="Ingresa el precio"></asp:TextBox>
                                </div>
                            </div><br /><br />
                            <div class="form-group">
                                <label class="control-label col-sm-2" for="stock">Stock:</label>
                                <div class="col-sm-10">
                                    <asp:TextBox CssClass="form-control" ID="stock" runat="server" placeholder="Ingresa el stock"></asp:TextBox>
                                </div>
                            </div>
                        </form> 
                        </div>
                        <div class="col-md-4">
                            <div class="btn-group-vertical">
                                <asp:Button CssClass="btn btn-primary btn-custom" ID="Button1" runat="server" Text="Listar" />
                                <asp:Button CssClass="btn btn-success btn-custom" ID="Button2" runat="server" Text="Guardar" />
                                <asp:Button CssClass="btn btn-warning btn-custom" ID="Button3" runat="server" Text="Editar" />
                                <asp:Button CssClass="btn btn-danger btn-custom" ID="Button4" runat="server" Text="Eliminar" />                  
                            </div>
                        </div>
                    </div>
                    <div class="row">
                       <div class="col-md-10 col-md-offset-1">
                            <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Row</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>John</td>
                                    <td>Carter</td>
                                    <td>johncarter@mail.com</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Peter</td>
                                    <td>Parker</td>
                                    <td>peterparker@mail.com</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>John</td>
                                    <td>Rambo</td>
                                    <td>johnrambo@mail.com</td>
                                </tr>
                            </tbody>
                        </table>
                       </div>
                    </div>
                </div>
                <div role="tabpanel" class="tab-pane" id="section4">
                        <h3>Section 4</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic expedita placeat animi 
                            labore deserunt eveniet atque nulla nostrum cupiditate at odio, magni quibusdam quam cum. 
                            Ad vitae velit non aliquid.</p>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
    <script src="http://code.jquery.com/jquery-latest.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" 
        integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" 
        crossorigin="anonymous"></script>
    </form>
</body>
</html>
