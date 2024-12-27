import React from 'react';

export default function Icon({ icon, className = '', iconStyle = 'light', duotone=false }) {
    let faPrefix;
    let iconName = icon;

    if (iconStyle === 'solid') {
        faPrefix = 'fas';
    } else if (iconStyle === 'kit') {
        faPrefix = 'fa-kit'; // Custom kit prefix for your icons
    } else if (iconStyle === 'brands') {
        faPrefix = 'fa-brands';
    } else {
        faPrefix = 'fal'; // Light style by default
    }

    if (duotone) {
        return (
            <i className={`${className} ${faPrefix} fa-${iconName} fa-fw`}></i>
        );
    } else {
        return (
            <i className={`${className} ${faPrefix} fa-${iconName} fa-fw`}></i>
        );
    }
}
