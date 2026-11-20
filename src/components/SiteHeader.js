import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { primaryNav, sectionPages, sections } from "../content/navigation";
import { displayName } from "../lib/identity";
import { withTrailingSlash } from "../lib/paths";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null);
  const buttonRef = useRef(null);
  const navRef = useRef(null);
  const toggleRefs = useRef({});
  const { pathname } = useLocation();
  const current = withTrailingSlash(pathname);

  useEffect(() => {
    setOpen(false);
    setOpenSection(null);
  }, [pathname]);

  useEffect(() => {
    if (!open && !openSection) {
      return undefined;
    }
    function handleKeyDown(event) {
      if (event.key !== "Escape") {
        return;
      }
      if (openSection) {
        const toggle = toggleRefs.current[openSection];
        setOpenSection(null);
        if (toggle) {
          toggle.focus();
        }
        return;
      }
      setOpen(false);
      if (buttonRef.current) {
        buttonRef.current.focus();
      }
    }
    function handlePointerDown(event) {
      if (openSection && navRef.current && !navRef.current.contains(event.target)) {
        setOpenSection(null);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, [open, openSection]);

  function closeWhenFocusLeaves(section) {
    return (event) => {
      if (openSection === section && !event.currentTarget.contains(event.relatedTarget)) {
        setOpenSection(null);
      }
    };
  }

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-title" to="/">
          {displayName}
        </Link>
        <button
          ref={buttonRef}
          type="button"
          className="menu-button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="menu-button__icon" aria-hidden="true" />
          Menu
        </button>
        <nav
          ref={navRef}
          id="site-nav"
          className="site-nav"
          aria-label="Main"
          data-open={open ? "true" : "false"}
        >
          <ul className="site-nav__list">
            {primaryNav.map((item) => {
              const isPage = current === item.path;
              const inSection = !isPage && Boolean(item.section) && sections[item.section].includes(current);
              const link = (
                <Link to={item.path} aria-current={isPage ? "page" : inSection ? "true" : undefined}>
                  {item.label}
                </Link>
              );
              const children = item.section ? sectionPages[item.section] : null;
              if (!children) {
                return <li key={item.path}>{link}</li>;
              }
              const submenuId = `submenu-${item.section}`;
              const expanded = openSection === item.section;
              return (
                <li key={item.path} className="has-submenu" onBlur={closeWhenFocusLeaves(item.section)}>
                  <div className="site-nav__row">
                    {link}
                    <button
                      ref={(element) => {
                        toggleRefs.current[item.section] = element;
                      }}
                      type="button"
                      className="submenu-toggle"
                      aria-expanded={expanded}
                      aria-controls={submenuId}
                      onClick={() => setOpenSection((value) => (value === item.section ? null : item.section))}
                    >
                      <span className="submenu-toggle__icon" aria-hidden="true" />
                      <span className="visually-hidden">{item.label} pages</span>
                    </button>
                  </div>
                  <ul className="submenu" id={submenuId} data-open={expanded ? "true" : "false"}>
                    {children.map((child) => (
                      <li key={child.path}>
                        <Link to={child.path} aria-current={current === child.path ? "page" : undefined}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
