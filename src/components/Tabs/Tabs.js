import React, { useState } from 'react'
import PropTypes from 'prop-types'

import * as Components from './Tabs.styles'
import Container from '../Container'

/**
 * Tabs Component
 * @param {array} tabItems
 * @param {string} tabItems[].title - title of the tab
 * @param {function} tabItems[].content - content of the tab
 */
function Tabs ({ tabItems }) {
  const [selectedTab, setSelectedTab] = useState(0)

  const handleTabSelection = (index) => {
    setSelectedTab(index)
  }

  const renderSelectedTabContent = () => {
    const { content } = tabItems[selectedTab]
    return content()
  }

  return (
    <>
      <Components.Background>
        <Container>
          <Components.Tabs>
            {tabItems.map(({ title }, index) => (
              <Components.Tab
                key={index}
                onClick={() => handleTabSelection(index)}
                isSelected={index === selectedTab}
              >
                {title}
              </Components.Tab>
            ))}
          </Components.Tabs>
        </Container>
      </Components.Background>
      <div>
        <Container>
          {renderSelectedTabContent()}
        </Container>
      </div>
    </>
  )
}

Tabs.propTypes = {
  onTabSelection: PropTypes.func.isRequired,
  tabItems: PropTypes.array.isRequired
}

export default Tabs
