import { UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle , Badge} from "reactstrap"
export default function ClaimRow(data){
    const detail = data.claim;
    const convertDate = (date) =>{
        const inputDate = new Date(date);
        const day = inputDate.getDate().toString().padStart(2, '0');
        const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
        const year = inputDate.getFullYear().toString().slice(-2);
        const formattedDateString = `${day}/${month}/${year}`;
        return formattedDateString;
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
                                onClick={(e) => e.preventDefault()}>
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