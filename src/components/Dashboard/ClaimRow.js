import { UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle , Badge} from "reactstrap"
import { BrowserRouter, Route, Switch, Redirect, useHistory } from "react-router-dom";
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default function ClaimRow(data){
    const detail = data.claim;
    const id = detail.ClaimID;
    const convertDate = (date) =>{
        const inputDate = new Date(date);
        const day = inputDate.getDate().toString().padStart(2, '0');
        const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
        const year = inputDate.getFullYear().toString().slice(-2);
        const formattedDateString = `${day}/${month}/${year}`;
        return formattedDateString;
    }
    const history = useHistory();
    const routeToViewClaim = () => {
        
        let path = '/admin/claimdetails';
        history.push(path);
      }
      const routeToEditClaim = () => {
        let path = '/admin/editclaim';
        history.push(path);
      }
    
    // Function to Delete Claim
    const deleteClaim = async (id) => {
        await axios({
            method: 'DELETE',
            url: `http://localhost:3000/deleteClaim?claimId=${id}`,
            headers: {
                'Content-Type': 'application/json'
            }
            
        }).then(response => {
            history.push('/admin/index')
    })
  }
  // Function for popup
  const deletePopup = () => {

    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure you want to delete?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => deleteClaim()
        },
        {
          label: 'No',
          //onClick: () => alert('Click No')
        }
      ]
    });
  }
    return(
        <tr>
            <td>{convertDate(detail.LastEditedClaimDate)}</td>
            <td>{detail.ClaimID}</td>
            <td>{detail.ProjectID}</td>
            <td>{detail.Amount}</td>
            <td>{detail.CurrencyID}</td>
            <td>
                <Badge color="" className="badge-dot mr-4">
                <i className={detail.Status === "Rejected" ? "bg-danger": (detail.Status === "Pending" ? "bg-warning" : "bg-success")} />
                {detail.Status}
                </Badge>
            </td>
            <td className="text-right">
                <UncontrolledDropdown>
                    <DropdownToggle
                        className="btn-icon-only text-light"
                        href="#pablo"
                        role="button"
                        size="sm"
                        color=""
                        onClick={(e) => e.preventDefault()}>
                    <i className="fas fa-ellipsis-v" />
                    </DropdownToggle>
                    
                    <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                                href="#pablo"
                                onClick={(e) => routeToViewClaim}>
                                View
                            </DropdownItem>
                        {detail.Status !== "Approved" ?
                            <>
                            <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}>
                                Edit
                            </DropdownItem>
                            <DropdownItem
                                href="#pablo"
                                onClick={deletePopup}>
                                Delete
                            </DropdownItem>
                            </> : <></>
                        }
                </DropdownMenu>
            </UncontrolledDropdown>
            </td>
        </tr>
        
    )
}