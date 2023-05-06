
import { UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from "reactstrap"
export default function TableButton(props){
    return(
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
            <DropdownItem
                href="#pablo"
                onClick={(e) => e.preventDefault()}
            >
                Edit
            </DropdownItem>
            <DropdownItem
                href="#pablo"
                onClick={(e) => e.preventDefault()}
            >
                Delete
            </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )

}