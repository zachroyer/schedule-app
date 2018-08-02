import React, { Component } from 'react';

import Icon from '../icon';

class LibraryCourse extends Component {
    render() {
        return (
            <div className='library-course'>
                <label className='library-course__title'>Problem Solving</label>
                { Icon('fas fa-check', 'library-course__icon') }
                <div className='library-course__description'>
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet erat sed augue semper, lacinia luctus sem dapibus. Aliquam dapibus eu eros eget accumsan. Vestibulum nulla eros, tristique non faucibus ut, viverra id neque.</p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;