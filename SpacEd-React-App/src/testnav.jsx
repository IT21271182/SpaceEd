import { 
  Button, 
  MegaMenu, 
  MegaMenuDropdown, 
  Navbar, 
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle
} from 'flowbite-react';

export default function Testnav() {
  return (
    <MegaMenu>
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4 md:space-x-8">
        <NavbarBrand href="/Home">
          <img alt="" src="/RoundLogo.png" className="mr-3 h-6 sm:h-9" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">SpacEd</span>
        </NavbarBrand>
        <div className="order-2 hidden items-center md:flex">
          <Button href="/">Log out</Button>
        </div>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href="/Home">Home</NavbarLink>
          <NavbarLink>
            <MegaMenuDropdown toggle={<>APOD</>}>
              <ul className="grid grid-cols-3">
                <div className="space-y-4 p-4">
                  <li>
                    <a href="/APOD" className="hover:text-primary-600 dark:hover:text-primary-500">
                      Today's APOD
                    </a>
                  </li>
                  <li>
                    <a href="/SingleDayAPOD" className="hover:text-primary-600 dark:hover:text-primary-500">
                      Single Day APOD
                    </a>
                  </li>
                  <li>
                    <a href="/DateRangeAPOD" className="hover:text-primary-600 dark:hover:text-primary-500">
                      Date Range APOD
                    </a>
                  </li>
                </div>
              </ul>
            </MegaMenuDropdown>
          </NavbarLink>
          <NavbarLink href="/Mars">Mars Rover Photos</NavbarLink>
          <NavbarLink href="/Earth">Earth Art Gallery</NavbarLink>
        </NavbarCollapse>
      </div>
    </MegaMenu>
  );
}
