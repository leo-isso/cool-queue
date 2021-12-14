import React, { useState } from 'react'
import PropTypes from 'prop-types'

import * as Components from './Tabs.styles'
import Container from '../Container'

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
            {tabItems.map(({ name }, index) => (
              <Components.Tab
                key={index}
                onClick={() => handleTabSelection(index)}
                isSelected={index === selectedTab}
              >
                {name}
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
