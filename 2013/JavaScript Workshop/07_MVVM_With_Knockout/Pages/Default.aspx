<%-- The following 4 lines are ASP.NET directives needed when using SharePoint components --%>
<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" Language="C#" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%-- The markup and script in the following Content element will be placed in the <head> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
	<script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.7.1.min.js"></script>
	<script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>
	<script type="text/javascript" src="/_layouts/15/sp.js"></script>
	<script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/knockout/knockout-2.2.1.js"></script>
	<script type="text/javascript" src="../Scripts/AppViewModel.js"></script>
	<script type="text/javascript" src="../Scripts/Contact.js"></script>
	<script type="text/javascript" src="../Scripts/MockupRepository.js"></script>
	<!-- Add your CSS styles to the following file -->
	<link rel="Stylesheet" type="text/css" href="../Content/App.css" />
	<script type="text/javascript">
		$(document).ready(function(){
			var viewModel = new AppViewModel();
			ko.applyBindings(viewModel);
			viewModel.init();
		});
	</script>
</asp:Content>

<%-- The markup in the following Content element will be placed in the TitleArea of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">
	Page Title
</asp:Content>

<%-- The markup and script in the following Content element will be placed in the <body> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">

	<div>
		<table>
			<thead>
				<tr>
					<th>FirstName</th>
					<th>LastName</th>
				</tr>
			</thead>
			<tbody data-bind="foreach: contacts">
				<tr>
					<td><span data-bind="text: firstName" /></td>
					<td><span data-bind="text: lastName" /></td>
				</tr>
			</tbody>
		</table>
		<button type="button" data-bind="click: insertNewContact">Insert new Contact</button>
	</div>

</asp:Content>