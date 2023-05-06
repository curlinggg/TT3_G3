import { UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle , Badge} from "reactstrap"
import { BrowserRouter, Route, Switch, Redirect, useHistory } from "react-router-dom";
export default function ClaimRow(data){
    const detail = data.claim;
    const history = useHistory();
    const routeToViewClaim = () => {
        
        let path = '/admin/claimdetails';
        history.push(path);
      }
      const routeToEditClaim = () => {
        let path = '/admin/editclaim';
        history.push(path);
      }
    return(
        <tr>
            <td>{detail.LastEditedClaimDate}</td>
            <td>{detail.ClaimID}</td>
            <td>{detail.ProjectID}</td>
            <td>{detail.Amount}</td>
            <td>{detail.CurrencyID}</td>
            <td>
                <Badge color="" className="badge-dot mr-4">
                <i className={detail.Status == "Rejected" ? "bg-danger": (detail.Status == "Pending" ? "bg-warning" : "bg-success")} />
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
                        {detail.Status != "Approved" ?
                            <>
                            <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}>
                                Edit
                            </DropdownItem>
                            <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}>
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