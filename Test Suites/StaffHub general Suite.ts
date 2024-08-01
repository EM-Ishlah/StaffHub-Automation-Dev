<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteCollectionEntity>
   <description>generally test everything</description>
   <name>StaffHub general Suite</name>
   <tag></tag>
   <delayBetweenInstances>0</delayBetweenInstances>
   <executionMode>PARALLEL</executionMode>
   <maxConcurrentInstances>4</maxConcurrentInstances>
   <testSuiteRunConfigurations>
      <TestSuiteRunConfiguration>
         <configuration>
            <groupName>Web Desktop</groupName>
            <profileName>default</profileName>
            <requireConfigurationData>false</requireConfigurationData>
            <runConfigurationId>Chrome</runConfigurationId>
         </configuration>
         <runEnabled>true</runEnabled>
         <testSuiteEntity>Test Suites/Dashboard Page Test Suite</testSuiteEntity>
      </TestSuiteRunConfiguration>
      <TestSuiteRunConfiguration>
         <configuration>
            <groupName>Web Desktop</groupName>
            <profileName>default</profileName>
            <requireConfigurationData>false</requireConfigurationData>
            <runConfigurationId>Chrome</runConfigurationId>
         </configuration>
         <runEnabled>true</runEnabled>
         <testSuiteEntity>Test Suites/Login Page Test Suite</testSuiteEntity>
      </TestSuiteRunConfiguration>
   </testSuiteRunConfigurations>
</TestSuiteCollectionEntity>
